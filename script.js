function sendMessage() {

    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = message;

    chatBox.appendChild(userMessage);

    let botMessage = document.createElement("div");
    botMessage.className = "bot-message";

    let lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("admission")) {
        botMessage.innerText =
            "For admission information, please contact the college admission office.";
    }
    else if (lowerMessage.includes("course")) {
        botMessage.innerText =
            "Our college offers various undergraduate and postgraduate courses.";
    }
    else if (lowerMessage.includes("fees")) {
        botMessage.innerText =
            "Please contact the college office for detailed fee information.";
    }
    else if (
        lowerMessage.includes("hello") ||
        lowerMessage.includes("hi")
    ) {
        botMessage.innerText =
            "Hello! 👋 How can I help you?";
    }
    else {
        botMessage.innerText =
            "Sorry, I don't have information about that yet.";
    }

    chatBox.appendChild(botMessage);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}