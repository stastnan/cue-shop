
const chatMessages = document.getElementById('chat-messages');
  const userButtons = document.getElementById('user-input');

  function askQuestion(question, ...options) {
    appendMessage('user', question);

    // CHATBOT RESPONSE
    setTimeout(() => {
      const botResponse = generateBotResponse(question);
      appendMessage('bot', botResponse);

      // CHANGE BUTTONS AFTER RESPONSE
      changeButtons(...options);
    }, 500);
  }

  function changeButtons(...options) {
    userButtons.innerHTML = options.map(option => `<button onclick="userSelection('${option}')">${option}</button>`).join('');
  }

  function userSelection(selection) {
    appendMessage('user', `Mark: ${selection}`);
    //PRINT USER REPONSE

    // CHAT REPONSE AFTER SELECTION
    setTimeout(() => {
      const botResponse = generateBotResponse(`You selected: ${selection}`);
      appendMessage('bot', botResponse);

      // You can continue the conversation by changing the buttons again
      // Change buttons after the response
      changeButtons('', 'No');
      changeButtons('Yes', 'No');
    }, 500);
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function generateBotResponse(userQuestion) {
    // Replace this with your own logic for generating a response based on the user's question
    if (userQuestion.toLowerCase().includes('help')) {
      return 'My name is BotBola and I am here to assist you!';
    } else if (userQuestion.toLowerCase().includes('existential questions')) {
      return 'Let\'s talk about it! What would you like to share?';
    } else if (userQuestion.toLowerCase().includes('review my order')) {
      return 'Really? After what you have just been shown, you would like to talk about your white shirt some more?';
    } else if (userQuestion.toLowerCase().includes('yes')) {
      return 'Great to hear! Is there anything else you need assistance with?';
    } else if (userQuestion.toLowerCase().includes('no')) {
      return 'We appreciate your honesty. What can we do to make it better?';
    } else if (userQuestion.toLowerCase().includes('better')) {
      return 'Thank you for your input. We\'ll work on improving!';
    } else if (userQuestion.toLowerCase().includes('not sure')) {
      return 'No problem. If you think of anything, feel free to let us know.';
    } else {
      return 'I didn\'t understand that. Can you please be more specific?';
    }
  }