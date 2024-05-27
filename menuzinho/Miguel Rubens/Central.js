// Função para adicionar uma mensagem ao chat
function addMessage(message, self) {
    const chatMessages = document.querySelector('.chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    if (self) {
        messageElement.classList.add('self');
    }
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Adicionar evento de clique no botão de enviar
const sendButton = document.querySelector('.chat-send-button');
sendButton.addEventListener('click', () => {
    const messageInput = document.querySelector('.chat-message-input');
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, true);
        messageInput.value = '';

        // Simular resposta do servidor
        setTimeout(() => {
            addMessage('Central de ajuda: Tire suas dúvidas', false);
            addMessage('Seção 1: Cadastro', false);
            addMessage('Crie sua conta em 3 passos fáceis:', false);
            addMessage('Preencha seus dados: Nome de usuário (seja criativo!), ', false);
            addMessage('email (digite corretamente!), confirme seu email, ', false);
            addMessage('senha (uma senha forte é a chave!), e confirme sua senha.', false);
            addMessage('Escolha caracteres válidos: Siga as instruções na tela para garantir que seus dados estejam corretos.', false);
            addMessage('Pronto! Clique em "Cadastrar" e comece a aproveitar o site.', false);
            addMessage('Seção 2: Login   ', false);
            addMessage('Acesse sua conta em um piscar de olhos:', false);
            addMessage('Informe seus dados: Digite seu nome de usuário ou email (você escolhe!) e sua senha (a mesma que você escolheu no cadastro).', false);
            addMessage('Clique em "Entrar" e aproveite tudo o que o site oferece.', false);
            addMessage('Seção 3: Esqueceu a senha? Sem problemas!', false);
            addMessage('Recupere sua senha em minutos:', false);
            addMessage('Clique em "Esqueci a senha": Um link será enviado para o email que você cadastrou.', false);
            addMessage('Acesse o link no seu email: Lá você encontrará instruções para criar uma nova senha.Nova senha criada? Agora você pode fazer login normalmente.', false);
            addMessage('Seção 4: Descubra os espaços disponíveis', false);
            addMessage('Explore novos ambientes com um clique:', false);
            addMessage('Acesse "Espaços disponíveis": Na tela inicial, clique nesse botão para ver a lista completa.', false);
            addMessage('Escolha o local que te interessa: Clique no nome do local e veja fotos, descrições e quem está por lá Pronto para explorar? Clique no local e divirta-se!', false);
            addMessage('Seção 5: Ainda tem dúvidas', false);
            addMessage('Entre em contato: Se precisar de mais ajuda, envie um email para @x.senai.nap@gmail.com', false);
            addMessage('Estamos aqui para te ajudar!', false);
        }, 1000);
    }
});

