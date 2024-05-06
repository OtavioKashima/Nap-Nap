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
            addMessage('Olá, como posso te ajudar?', false);
        }, 1000);
    }
});

