document.addEventListener('DOMContentLoaded', () => {
    const chatboxMessages = document.getElementById('chatbox-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const callButton = document.getElementById('call-button');
    const scheduleCallModal = document.getElementById('schedule-call-modal');
    const closeModalButton = document.querySelector('.close-button');
    const scheduleCallButton = document.getElementById('schedule-call-button');
    const callDateInput = document.getElementById('call-date');
    const callTimeInput = document.getElementById('call-time');

    const sendMessage = () => {
        const message = messageInput.value;
        if (message.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messageElement.classList.add('message', 'sent');
            chatboxMessages.appendChild(messageElement);
            messageInput.value = '';
            chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
        }
    };

    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    callButton.addEventListener('click', () => {
        scheduleCallModal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
        scheduleCallModal.style.display = 'none';
    });

    scheduleCallButton.addEventListener('click', () => {
        const callDate = callDateInput.value;
        const callTime = callTimeInput.value;
        if (callDate && callTime) {
            alert(`Call scheduled for ${callDate} at ${callTime}`);
            scheduleCallModal.style.display = 'none';
        } else {
            alert('Please select both a date and time for the call.');
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === scheduleCallModal) {
            scheduleCallModal.style.display = 'none';
        }
    });
});