// script.js
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    const target = e.target.getAttribute('href');
    tabContents.forEach((content) => {
      content.style.display = 'none';
    });
    document.querySelector(target).style.display = 'block';
  });
});

const spaceButtons = document.querySelectorAll('.space-button');
const chatContainer = document.getElementById('chat-container');
const closeChat = document.getElementById('close-chat');
const chatTitle = document.getElementById('chat-title');
const chatContent = document.getElementById('chat-content');
const messageInput = document.getElementById('message-input');
const sendMessage = document.querySelector('#chat-input .send-message');

const aiResponses = [
  'Como vai seu dia?',
  'Não quero falar com vc hj',
  'se ta rindo mas é nois que vai ficar rico'
];

spaceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const space = button.dataset.space;
    const occupants = button.dataset.occupants;
    const chatTitleText = `Bloco ${space} ( ${occupants} pessoas )`;

    chatContainer.style.display = 'block';
    chatTitle.textContent = chatTitleText;

    chatContent.innerHTML = '';

    // Add AI messages
    const aiMessage1 = document.createElement('div');
    aiMessage1.classList.add('message');
    aiMessage1.textContent = 'Ola, eu sou Fidelis';
    chatContent.appendChild(aiMessage1);

    sendMessage.addEventListener('click', () => {
      const message = messageInput.value.trim();

      if (message!== '') {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = message;
        chatContent.appendChild(newMessage);

        // Clear the input field
        messageInput.value = '';

        // Add AI response
        const aiResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        const aiResponseMessage = document.createElement('div');
        aiResponseMessage.classList.add('message');
        aiResponseMessage.textContent = aiResponse;
        chatContent.appendChild(aiResponseMessage);

        // Add the code to send the message to the server here
      }
    });

    // Add an event listener for pressing Enter key
    messageInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage.click();
      }
    });
  });
});

closeChat.addEventListener('click', () => {
  chatContainer.style.display = 'none';
});