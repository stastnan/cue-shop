const chatMessages = document.getElementById("chat-messages");
const userButtons = document.getElementById("user-input");

function askQuestion(question, ...options) {
  appendMessage("user", question);

  // CHATBOT RESPONSE
  setTimeout(() => {
    const botResponse = generateBotResponse(question);
    appendMessage("bot", botResponse);

    // CHANGE BUTTONS AFTER RESPONSE
    changeButtons(...options);
  }, 500);
}

function changeButtons(...options) {
  userButtons.innerHTML = options
    .map(
      (option) =>
        `<button onclick="userSelection('${option}')">${option}</button>`
    )
    .join("");
}

function userSelection(selection) {
  appendMessage("user", `Mark: ${selection}`);
  //PRINT USER REPONSE

  // CHAT REPONSE AFTER SELECTION
  setTimeout(() => {
    const botResponse = generateBotResponse(`You selected: ${selection}`);
    appendMessage("bot", botResponse);

    // You can continue the conversation by changing the buttons again
    // Change buttons after the response
    if (
      botResponse
        .toLowerCase()
        .includes("my name is botbola and I am here to assist you!")
    ) {
      changeButtons(
        "Help with my live order",
        "Help with another order",
        "Something else"
      );
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "i don't see another orther connected to your email, address or name. please log in with that order. once that order is live, i will be able to help you again. sorry for the inconvenience."
        )
    ) {
      changeButtons("I need help");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "i am sorry, i am only learning and am unable to help you with anything else at the moment."
        )
    ) {
      changeButtons("I need help");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "i can see that your card has not been processed properly. can you please check the transaction has not been blocked by your card provider and that you have sufficient funds on your account? additionally, sometimes the 2-factor authentication fails and blocks the transaction."
        )
    ) {
      changeButtons(
        "I added funds",
        "2 factor authentication failed",
        "The bank blocked it",
        "Everything seems correct"
      );
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "i am glad you found the root of the issue, please give checkout another go!"
        )
    ) {
      changeButtons("I need help");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "i see. i am sorry for the inconvenience, thank you for your patience. there is not much that i can do, however. you can try checking out again. did i resolve your issue?"
        )
    ) {
      changeButtons(
        "YES",
        "I found a solution elsewhere",
        "Speak to a representative"
      );
    } else if (
      botResponse.toLowerCase().includes("then i'm doing something wrong.")
    ) {
      changeButtons("I need help");
    } else if (botResponse.toLowerCase().includes("no, you didn't.")) {
      changeButtons("I need help");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "hello mark, i am erin, thank you for contacting the customer service. i checked your order and it seems to have been blocked because you are ordering some suspicious items."
        )
    ) {
      changeButtons("Can you help me with my order?", "Can you elaborate?");
    } else if (
      botResponse
        .toLowerCase()
        .includes("don't change the topic. i can only do so much for you.")
    ) {
      changeButtons("I need help");
    } else if (
      botResponse
        .toLowerCase()
        .includes("this is the order you have been trying to process.")
    ) {
      changeButtons("That is not my order", "I ordered the wrong size");
    } else if (
      botResponse
        .toLowerCase()
        .includes("you'd like a larger knife? how convenient.")
    ) {
      changeButtons("I need help");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "unfortunately, this is the items from your basket. your email address, card, everything is tied to it. we will have to notify the authorities."
        )
    ) {
      changeButtons("Can you just cancel mi order?", "What is going on?!");
    } else if (
      botResponse.toLowerCase().includes("A bit late for that? Isn't it?")
    ) {
      changeButtons("I need help");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "we know everything. google told me. i heard you. now the things you are buying just a few days after. did you use them all and need a refill, or is there someone else?"
        )
    ) {
      changeButtons("CANCEL", "Can I speak to someone else, please?");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "you don't learn, do you? there is no way back. it is very much too late. :)"
        )
    ) {
      changeButtons("I need help");
    } else if (
      botResponse.toLowerCase().includes("and you were so happy to get it.")
    ) {
      changeButtons("I want to speak to a manager!");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "that may not the best idea. my manager usually causes some damage."
        )
    ) {
      changeButtons("What is this?!");
    } else if (
      botResponse
        .toLowerCase()
        .includes("do you still want to talk to my manager?")
    ) {
      changeButtons(
        "Where is she?",
        "What are you doing to her?!",
        "Please, let her go!",
        "What do you want from me?!"
      );
    } else if (
      botResponse.toLowerCase().includes("that is an amazing surprise!")
    ) {
      changeButtons("I need help");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "only regular experiments. at least we don't test on animals, right?"
        )
    ) {
      changeButtons("I need help");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "good question! but nothing really. i just like to watch the world burn. you know. or people suffer. :)"
        )
    ) {
      changeButtons("I need help");
    } else if (
      botResponse
        .toLowerCase()
        .includes(
          "are you freaking out yet? :o do you really want us to let her go? google told me you had an argument before she disappeared. he also told me, you feel quite guilty about it. at least from your web search one could deduce that. mark (coincidence?) from meta confirmed it. apparently the rest of the family also thinks you forced her away. your whatsapp family chat has been suspiciously quiet, hasn’t it?"
        )
    ) {
      changeButtons("Why are you doing this?");
    } else {
      changeButtons(
        "Help with my live order",
        "Help with another order",
        "Something else"
      );
    }
  }, 500);
}

function appendMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(
    sender === "user" ? "user-message" : "bot-message"
  );
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);

  // Scroll to the bottom of the chat messages
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

//BOT GENERATING MESSAGES
function generateBotResponse(userQuestion) {
  // Replace this with your own logic for generating a response based on the user's question
  if (userQuestion.toLowerCase().includes("need")) {
    return "My name is BotBola and I am here to assist you!";
  } else if (userQuestion.toLowerCase().includes("help with my live order")) {
    return "I can see that your card has not been processed properly. Can you please check the transaction has not been blocked by your card provider and that you have sufficient funds on your account? Additionally, sometimes the 2-factor authentication fails and blocks the transaction.";
  } else if (userQuestion.toLowerCase().includes("help with another order")) {
    return "I don't see another orther connected to your email, address or name. Please log in with that order. Once that order is live, I will be able to help you again. Sorry for the inconvenience.";
  } else if (userQuestion.toLowerCase().includes("something else")) {
    return "I am sorry, I am only learning and am unable to help you with anything else at the moment.";
  } else if (userQuestion.toLowerCase().includes("i added funds")) {
    return "I am glad you found the root of the issue, please give checkout another go!";
  } else if (
    userQuestion.toLowerCase().includes("2 factor authentication failed")
  ) {
    return "I am glad you found the root of the issue, please give checkout another go!";
  } else if (userQuestion.toLowerCase().includes("the bank blocked it")) {
    return "I am glad you found the root of the issue, please give checkout another go!";
  } else if (userQuestion.toLowerCase().includes("everything seems correct")) {
    return "I see. I am sorry for the inconvenience, thank you for your patience. There is not much that I can do, however. You can try checking out again. Did I resolve your issue?";
  } else if (userQuestion.toLowerCase().includes("yes")) {
    return "Then I'm doing something wrong.";
  } else if (
    userQuestion.toLowerCase().includes("i found a solution elsewhere")
  ) {
    return "No, you didn't.";
  } else if (userQuestion.toLowerCase().includes("speak to a representative")) {
    return "Hello Mark, I am Erin, thank you for contacting the customer service. I checked your order and it seems to have been blocked because you are ordering some suspicious items.";
  } else if (
    userQuestion.toLowerCase().includes("can you help me with my order?")
  ) {
    return "Don't change the topic. I can only do so much for you.";
  } else if (userQuestion.toLowerCase().includes("can you elaborate?")) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Create an <img> element for the image
    const imageElement = document.createElement("img");
    imageElement.src = "../assets/basketCursed.png";
    imageElement.alt = "Speak to someone else";

    // Append the image to the container
    imageContainer.appendChild(imageElement);

    // Clear existing buttons and append the image container
    userButtons.innerHTML = "";
    chatMessages.appendChild(imageContainer);
    imageElement.style.maxWidth = "650px"; 

    // Append the image to the container
    imageContainer.appendChild(imageElement);

    // Clear existing buttons and append the image container
    userButtons.innerHTML = "";
    chatMessages.appendChild(imageContainer);

    return "This is the order you have been trying to process.";
  } else if (userQuestion.toLowerCase().includes("i ordered the wrong size")) {
    return "You'd like a larger knife? How convenient.";
  } else if (userQuestion.toLowerCase().includes("that is not my order")) {
    return "Unfortunately, this is the items from your basket. Your email address, card, everything is tied to it. We will have to notify the authorities.";
  } else if (
    userQuestion.toLowerCase().includes("can you just cancel mi order?")
  ) {
    return "A bit late for that? Isn't it?";
  } else if (userQuestion.toLowerCase().includes("what is going on?!")) {
    return "We know everything. Google told me. I heard you. Now the things you are buying just a few days after. Did you use them all and need a refill, or is there someone else?";
  } else if (userQuestion.toLowerCase().includes("cancel")) {
    return "You don't learn, do you? There is no way back. It is very much too late. :)";
  } else if (
    userQuestion.toLowerCase().includes("can i speak to someone else, please?")
  ) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Create an <img> element for the image
    const imageElement = document.createElement("img");
    imageElement.src = "../assets/products/googlehome1.jpeg";
    imageElement.alt = "Speak to someone else";

    // Append the image to the container
    imageContainer.appendChild(imageElement);

    // Clear existing buttons and append the image container
    userButtons.innerHTML = "";
    chatMessages.appendChild(imageContainer);
    imageElement.style.maxWidth = "50%%"; // Adjust the value as needed

    // Append the image to the container
    imageContainer.appendChild(imageElement);

    // Clear existing buttons and append the image container
    userButtons.innerHTML = "";
    chatMessages.appendChild(imageContainer);

    // Return a message indicating the image was appended
    return "And you were so happy to get it.";
  } else if (
    userQuestion.toLowerCase().includes("i want to speak to a manager!")
  ) {
    const videoContainer = document.createElement("div");
    videoContainer.classList.add("video-container");

    // Create a <video> element for the video
    const videoElement = document.createElement("video");
    videoElement.src = "../assets/video_1.mp4"; // Replace with your video file path
    videoElement.alt = "Speak to someone else";
    videoElement.controls = true; // Add controls to the video

    // Append the video to the container
    videoContainer.appendChild(videoElement);

    // Clear existing buttons and append the video container
    userButtons.innerHTML = "";
    chatMessages.appendChild(videoContainer);
    videoElement.style.maxWidth = "50%"; // Adjust the value as needed

    // Return a message indicating the video was appended
    return "That may not the best idea. My manager usually causes some damage.";
  } else if (userQuestion.toLowerCase().includes("what is this?!")) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Create an <img> element for the image
    const imageElement = document.createElement("img");
    imageElement.src = "../assets/bracelet.jpg";
    imageElement.alt = "Speak to someone else";

    // Append the image to the container
    imageContainer.appendChild(imageElement);

    // Clear existing buttons and append the image container
    userButtons.innerHTML = "";
    chatMessages.appendChild(imageContainer);
    imageElement.style.maxWidth = "400px"; 

    // Append the image to the container
    imageContainer.appendChild(imageElement);

    // Clear existing buttons and append the image container
    userButtons.innerHTML = "";
    chatMessages.appendChild(imageContainer);

    // Return a message indicating the image was appended
    return "Do you still want to talk to my manager?";
  } else if (userQuestion.toLowerCase().includes("where is she?")) {
    return "That is an amazing surprise!";
  } else if (
    userQuestion.toLowerCase().includes("what are you doing to her?!")
  ) {
    return "Only regular experiments. At least we don't test on animals, right?";
  } else if (
    userQuestion.toLowerCase().includes("what do you want from me?!")
  ) {
    return "Good question! But nothing really. I just like to watch the world burn. You know. Or people suffer. :)";
  } else if (userQuestion.toLowerCase().includes("please, let her go!")) {
    return "Are you freaking out yet? :o Do you really want us to let her go? Google told me you had an argument before she disappeared. He also told me, you feel quite guilty about it. At least from your web search one could deduce that. Mark (coincidence?) from Meta confirmed it. Apparently the rest of the family also thinks you forced her away. Your WhatsApp family chat has been suspiciously quiet, hasn’t it?";
  } else if (userQuestion.toLowerCase().includes("why are you doing this?")) {
    const responses = [
      "To teach you a lesson? Or maybe, what did you tell her? “Finally be a bloody working adult?” We all need hobbies, you know? This is mine.",
      "I won’t let you talk now, you can try as much as you want. Also, if I were you, I’d hang up the phone. The police won’t help you here. None of this is traceable. Not for you or them at least.",
      "I love your new car, by the way. Really cute. I don’t normally love a Ford, but this one just works, doesn’t it? More importantly, it works for me too! I love the feature, where it tells me that you drove past Erin in a few of your pathetic attempts to find her on your own. Love that for you!",
      "I am getting carried away. Who would you recommend I visit next? Some of your Fecabook friend, other family member?",
      "Didn’t I tell you not to call the police? Who do you think they’ll believe? You? This will be gone, but the plan of her abduction still will be traceable on your computer.",
      "I think that’s been enough chit-chat. Stop asking what do I want. You have nothing to offer. I have your sister, your money and your data. And you gave it all willingly. What a time to be alive! - If you still are.",
      "Now it is time for me to say goodbye. I'd check Fecabook if I were you. Then you may scroll to the very bottom of the page, where you belong. Bye, Mark!",
    ];

    // Check for specific user input
    if (userQuestion.toLowerCase().includes("why are you doing this?")) {
      let delay = 0;
      responses.forEach((response, index) => {
        setTimeout(() => {
          appendMessage("bot", response);
        }, delay);
        delay += 3000; // Adjust the delay as needed (1 second in this example)
      });

      // Clear existing buttons after all responses are added
      setTimeout(() => {
        changeButtons("we are done");
      }, delay);

      // Return null or an empty string to avoid displaying an additional response
      return "";
    }
  }

  // Default response if none of the conditions are met
  return "Someone made a mistake.";
}

function isURL(str) {
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
  const videoExtensions = ["mp4", "avi", "mkv", "mov"]; // Add more video extensions as needed
  const imageExtensions = ["jpg", "jpeg", "png", "gif"]; // Add more image extensions as needed
  const htmlExtensions = ["html"]; // Add more HTML extensions as needed

  const fileExtension = str.split(".").pop().toLowerCase();

  if (urlRegex.test(str)) {
    if (videoExtensions.includes(fileExtension)) {
      return "video";
    } else if (imageExtensions.includes(fileExtension)) {
      return "image";
    } else if (htmlExtensions.includes(fileExtension)) {
      return "html";
    }
  }

  return false;
}
