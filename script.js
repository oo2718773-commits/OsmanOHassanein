// script.js - Chat functionality with message sending

// Function to handle message sending functionality
function sendMessage() {
    const messageInput = document.querySelector('#message-input'); // Placeholder for message input
    const chatWindow = document.querySelector('#chat-window'); // Placeholder for chat display/output

    // Check if input is valid
    if (messageInput && messageInput.value.trim() !== '') {
        const messageText = messageInput.value.trim();

        // Create a chat message element (example output)
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.textContent = messageText;

        // Append the new message to the chat window
        if (chatWindow) {
            chatWindow.appendChild(messageElement);
        }

        // Clear the input field
        messageInput.value = '';
    } else {
        console.error('Message input is invalid or not found.');
    }
}

// Example placeholder logic for initializing the chat send button
function initializeChat() {
    const sendButton = document.querySelector('#send-button'); // Placeholder for the send button
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    } else {
        console.error('Send button not found. Ensure your frontend has an element with id="send-button".');
    }
}

// Initialize chat (example invocation; can be called on DOMContentLoaded)
initializeChat();