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
            addMessage('Crie sua conta em 3 passos fáceis:', false);
            addMessage('Preencha seus dados: Nome de usuário (seja criativo!), ', false);
            addMessage('email (digite corretamente!), confirme seu email, ', false);
            addMessage('senha (uma senha forte é a chave!), e confirme sua senha.', false);
            addMessage('Escolha caracteres válidos: Siga as instruções na tela para garantir que seus dados estejam corretos.', false);
            addMessage('Pronto! Clique em "Cadastrar" e comece a aproveitar o site.', false);
            addMessage('Seção 1: Cadastro', false);
            addMessage('Seção 1: Cadastro', false);
            addMessage('Seção 1: Cadastro', false);
            addMessage('Seção 1: Cadastro', false);
        }, 1000);
    }
});

