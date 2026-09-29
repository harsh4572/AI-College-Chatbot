function sendMessage() {

    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    // User message
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = message;

    chatBox.appendChild(userMessage);

    // Bot message
    let botMessage = document.createElement("div");
    botMessage.className = "bot-message";

    let lowerMessage = message.toLowerCase();

    // Greetings
    if (
        lowerMessage.includes("hello") ||
        lowerMessage.includes("hi") ||
        lowerMessage.includes("hey")
    ) {
        botMessage.innerText =
            "Hello! 👋 Welcome to our college chatbot. How can I help you?";

    // Admission
    } 
    else if (
        lowerMessage.includes("admission") ||
        lowerMessage.includes("admission process")
    ) {
        botMessage.innerText =
            "For admission, students need to complete the application process and submit the required documents.";

    // Courses
    } 
    else if (
        lowerMessage.includes("course") ||
        lowerMessage.includes("courses")
    ) {
        botMessage.innerText =
            "Our college offers various undergraduate and postgraduate courses. Please contact the college office for the complete list.";

    // Fees
    } 
    else if (
        lowerMessage.includes("fee") ||
        lowerMessage.includes("fees")
    ) {
        botMessage.innerText =
            "Fee structure depends on the course. Please contact the college administration office for detailed information.";

    // Exam
    } 
    else if (
        lowerMessage.includes("exam") ||
        lowerMessage.includes("examination")
    ) {
        botMessage.innerText =
            "Exam schedules and notices are usually provided by the college examination department.";

    // Timings
    } 
    else if (
        lowerMessage.includes("timing") ||
        lowerMessage.includes("time") ||
        lowerMessage.includes("college timing")
    ) {
        botMessage.innerText =
            "College timings may vary according to the department and timetable. Please check your official college timetable.";

    // Library
    } 
    else if (
        lowerMessage.includes("library") ||
        lowerMessage.includes("books")
    ) {
        botMessage.innerText =
            "The college library provides textbooks, reference books and study resources for students.";

    // Hostel
    } 
    else if (
        lowerMessage.includes("hostel") ||
        lowerMessage.includes("accommodation")
    ) {
        botMessage.innerText =
            "Hostel facilities may be available for eligible students. Please contact the college office for availability and fees.";

    // Contact
    } 
    else if (
        lowerMessage.includes("contact") ||
        lowerMessage.includes("phone") ||
        lowerMessage.includes("number")
    ) {
        botMessage.innerText =
            "For official contact information, please visit the college website or contact the administration office.";

    // Location
    } 
    else if (
        lowerMessage.includes("location") ||
        lowerMessage.includes("address") ||
        lowerMessage.includes("where is college")
    ) {
        botMessage.innerText =
            "Please check the official college website for the exact campus location and address.";

    // Documents
    } 
    else if (
        lowerMessage.includes("document") ||
        lowerMessage.includes("documents")
    ) {
        botMessage.innerText =
            "Common admission documents may include educational certificates, identity proof, photographs and application-related documents.";

    // Scholarship
    } 
    else if (
        lowerMessage.includes("scholarship") ||
        lowerMessage.includes("scholarships")
    ) {
        botMessage.innerText =
            "Scholarships may be available for eligible students. Please contact the college scholarship or administration department for details.";

    // Placement
    } 
    else if (
        lowerMessage.includes("placement") ||
        lowerMessage.includes("job")
    ) {
        botMessage.innerText =
            "The placement department helps eligible students with placement opportunities, recruitment drives and career guidance.";

    // Internship
    } 
    else if (
        lowerMessage.includes("internship") ||
        lowerMessage.includes("intern")
    ) {
        botMessage.innerText =
            "Students can contact the placement or training department for available internship opportunities.";

    // Thanks
    } 
    else if (
        lowerMessage.includes("thank") ||
        lowerMessage.includes("thanks")
    ) {
        botMessage.innerText =
            "You're welcome! 😊 I'm happy to help.";

    // Bye
    } 
    else if (
        lowerMessage.includes("bye") ||
        lowerMessage.includes("goodbye")
    ) {
        botMessage.innerText =
            "Goodbye! 👋 Have a great day.";

    // Unknown question
    } 
    else {
        botMessage.innerText =
            "Sorry, I don't have information about that yet. Try asking about admission, courses, fees, exams, library, hostel, scholarships, placements or internships.";
    }

    chatBox.appendChild(botMessage);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}