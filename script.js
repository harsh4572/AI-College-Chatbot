// ============================================================
// FLESHA AI - COLLEGE KNOWLEDGE SYSTEM
// ============================================================

const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");


// ============================================================
// SEND MESSAGE
// ============================================================

function sendMessage() {

    const userMessage = input.value.trim();

    if (userMessage === "") {
        return;
    }

    addMessage(userMessage, "user");

    input.value = "";

    showTyping();

    const response = getBotResponse(userMessage);

    setTimeout(() => {

        removeTyping();

        addMessage(response, "bot");

    }, 900);

}


// ============================================================
// ADD MESSAGE
// ============================================================

function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender);


    if (sender === "bot") {

        messageDiv.innerHTML = `

            <div class="message-icon">
                F
            </div>

            <div class="message-content">

                <strong>Flesha</strong>

                <p>${message}</p>

            </div>

        `;

    } else {

        messageDiv.innerHTML = `

            <div class="message-content">

                <p>${message}</p>

            </div>

        `;

    }


    chatBox.appendChild(messageDiv);

    scrollChat();

}


// ============================================================
// TYPING
// ============================================================

function showTyping() {

    const typing = document.createElement("div");

    typing.id = "typing-indicator";

    typing.className = "typing";

    typing.innerHTML = `

        <div class="message-icon">
            F
        </div>

        <span>Flesha is thinking</span>

        <div class="typing-dots">

            <span></span>
            <span></span>
            <span></span>

        </div>

    `;

    chatBox.appendChild(typing);

    scrollChat();

}


function removeTyping() {

    const typing =
        document.getElementById("typing-indicator");

    if (typing) {
        typing.remove();
    }

}


// ============================================================
// SCROLL
// ============================================================

function scrollChat() {

    chatBox.scrollTop =
        chatBox.scrollHeight;

}


// ============================================================
// QUICK QUESTIONS
// ============================================================

function quickQuestion(question) {

    input.value = question;

    sendMessage();

}


// ============================================================
// TEXT NORMALIZATION
// ============================================================

function normalize(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/[?!.,]/g, " ")
        .replace(/\s+/g, " ");

}


// ============================================================
// MAIN FLESHA RESPONSE ENGINE
// ============================================================

function getBotResponse(message) {

    const text = normalize(message);


    // ========================================================
    // GENERAL GREETINGS
    // ========================================================

    if (
        hasAny(text, [
            "hello",
            "hi",
            "hii",
            "hey",
            "helo",
            "good morning",
            "good afternoon",
            "good evening",
            "good night"
        ])
    ) {

        return `
        👋 <b>Hello!</b><br><br>

        Welcome to <b>Flesha AI</b> ✦<br><br>

        I'm your college assistant. I can help
        you with admissions, academics, exams,
        fees, scholarships, hostel, placements,
        internships, campus facilities and much more.<br><br>

        What would you like to know?
        `;

    }


    // ========================================================
    // IDENTITY
    // ========================================================

    if (
        hasAny(text, [
            "who are you",
            "what are you",
            "your name",
            "who is flesha",
            "tell me about yourself",
            "introduce yourself"
        ])
    ) {

        return `
        🤖 <b>I'm Flesha AI.</b><br><br>

        I'm a smart college information assistant
        designed to help students quickly find
        information about college life, academics,
        admissions, examinations, student services,
        careers and campus facilities.<br><br>

        ✦ Your digital college companion.
        `;

    }


    // ========================================================
    // CAPABILITIES
    // ========================================================

    if (
        hasAny(text, [
            "what can you do",
            "how can you help",
            "what do you know",
            "help me",
            "features",
            "what topics"
        ])
    ) {

        return `
        ✦ <b>Flesha can help with:</b><br><br>

        🎓 Admissions & eligibility<br>
        📚 Courses & departments<br>
        💰 Fees & payments<br>
        📝 Exams & results<br>
        📊 Attendance<br>
        📖 Library<br>
        🏠 Hostel<br>
        🎓 Scholarships<br>
        🚀 Placements<br>
        💼 Jobs & internships<br>
        📄 Documents<br>
        🚌 Transport<br>
        🍴 Canteen & mess<br>
        🪪 Student ID<br>
        🏫 Campus facilities<br>
        📞 Contact & location<br>
        🎯 Career guidance<br><br>

        Ask me any college-related question.
        `;

    }


    // ========================================================
    // ADMISSION
    // ========================================================

    if (
        hasAny(text, [
            "admission",
            "admissions",
            "apply admission",
            "how to apply",
            "application process",
            "admission process",
            "college admission",
            "take admission",
            "join college",
            "how can i join"
        ])
    ) {

        return `
        🎓 <b>Admission</b><br><br>

        The admission process generally includes
        checking eligibility, submitting an application,
        providing required documents and completing
        the applicable admission formalities.<br><br>

        For exact dates, eligibility and procedures,
        students should check the college's official
        admission information.
        `;

    }


    // ========================================================
    // ELIGIBILITY
    // ========================================================

    if (
        hasAny(text, [
            "eligibility",
            "eligible",
            "qualification required",
            "eligibility criteria",
            "who can apply",
            "minimum qualification",
            "required qualification"
        ])
    ) {

        return `
        🎓 <b>Eligibility</b><br><br>

        Eligibility depends on the course and
        academic program.<br><br>

        It may include previous academic
        qualifications, required subjects,
        marks and other applicable criteria.<br><br>

        Check the official course admission
        requirements for exact details.
        `;

    }


    // ========================================================
    // COURSES
    // ========================================================

    if (
        hasAny(text, [
            "course",
            "courses",
            "program",
            "programs",
            "degree",
            "degrees",
            "branch",
            "branches",
            "department",
            "departments",
            "specialization",
            "specializations"
        ])
    ) {

        return `
        📚 <b>Courses & Programs</b><br><br>

        Colleges can offer undergraduate,
        postgraduate, diploma and certificate
        programs depending on the institution.<br><br>

        Available programs, duration and
        eligibility vary by college.
        `;

    }


    // ========================================================
    // COURSE DURATION
    // ========================================================

    if (
        hasAny(text, [
            "course duration",
            "duration of course",
            "how many years",
            "course years",
            "degree duration",
            "how long is the course"
        ])
    ) {

        return `
        ⏳ <b>Course Duration</b><br><br>

        Course duration depends on the selected
        program and academic structure.<br><br>

        Check the official program details
        for the exact duration.
        `;

    }


    // ========================================================
    // FEES
    // ========================================================

    if (
        hasAny(text, [
            "fee",
            "fees",
            "college fees",
            "course fees",
            "tuition",
            "tuition fees",
            "fee structure",
            "how much fees",
            "cost of course"
        ])
    ) {

        return `
        💰 <b>Fee Structure</b><br><br>

        Fees depend on the course, academic year
        and applicable student category.<br><br>

        Please check the official fee structure
        or contact the college office for exact
        current fees.
        `;

    }


    // ========================================================
    // FEE PAYMENT
    // ========================================================

    if (
        hasAny(text, [
            "pay fees",
            "fee payment",
            "payment method",
            "online fees",
            "fees online",
            "installment",
            "installments"
        ])
    ) {

        return `
        💳 <b>Fee Payment</b><br><br>

        Colleges may provide online payment,
        bank payment or other approved methods.<br><br>

        Payment methods and installment options
        depend on the institution.
        `;

    }


    // ========================================================
    // EXAMS
    // ========================================================

    if (
        hasAny(text, [
            "exam",
            "exams",
            "examination",
            "examinations",
            "semester exam",
            "test",
            "internal exam",
            "external exam"
        ])
    ) {

        return `
        📝 <b>Examinations</b><br><br>

        College examinations may include internal
        assessments, practical examinations,
        semester examinations and other evaluations
        depending on the program.<br><br>

        Check your department or examination
        department for the official schedule.
        `;

    }


    // ========================================================
    // EXAM TIMETABLE
    // ========================================================

    if (
        hasAny(text, [
            "exam timetable",
            "exam schedule",
            "exam date",
            "examination date",
            "semester timetable",
            "when is exam"
        ])
    ) {

        return `
        📅 <b>Exam Timetable</b><br><br>

        Examination dates can change according
        to the academic calendar.<br><br>

        Please check the latest timetable
        published by the examination department.
        `;

    }


    // ========================================================
    // RESULTS
    // ========================================================

    if (
        hasAny(text, [
            "result",
            "results",
            "exam result",
            "semester result",
            "marks",
            "score",
            "grade",
            "grades"
        ])
    ) {

        return `
        📊 <b>Results</b><br><br>

        Results are generally published through
        the college or university's official
        result system.<br><br>

        Use the official student/result portal
        for your latest result.
        `;

    }


    // ========================================================
    // ATTENDANCE
    // ========================================================

    if (
        hasAny(text, [
            "attendance",
            "attendance percentage",
            "minimum attendance",
            "attendance rule",
            "attendance requirement",
            "absent",
            "present"
        ])
    ) {

        return `
        📋 <b>Attendance</b><br><br>

        Attendance requirements depend on the
        college, university and program.<br><br>

        Students should follow the attendance
        rules communicated by their department.
        `;

    }


    // ========================================================
    // LIBRARY
    // ========================================================

    if (
        hasAny(text, [
            "library",
            "college library",
            "books",
            "book issue",
            "borrow books",
            "library card",
            "library timing",
            "reading room",
            "study material"
        ])
    ) {

        return `
        📖 <b>Library</b><br><br>

        College libraries may provide textbooks,
        reference books, journals, digital resources,
        reading areas and study materials.<br><br>

        Library membership, borrowing limits
        and timings depend on the institution.
        `;

    }


    // ========================================================
    // HOSTEL
    // ========================================================

    if (
        hasAny(text, [
            "hostel",
            "college hostel",
            "hostel room",
            "hostel fees",
            "hostel admission",
            "hostel facility",
            "accommodation",
            "hostel food",
            "hostel timing"
        ])
    ) {

        return `
        🏠 <b>Hostel</b><br><br>

        Hostel services can include accommodation,
        rooms, mess facilities, security and
        student support.<br><br>

        Availability, fees, rules and room types
        vary by institution.
        `;

    }


    // ========================================================
    // SCHOLARSHIP
    // ========================================================

    if (
        hasAny(text, [
            "scholarship",
            "scholarships",
            "financial aid",
            "student scholarship",
            "education scholarship",
            "scholarship form",
            "scholarship eligibility"
        ])
    ) {

        return `
        🎓 <b>Scholarships</b><br><br>

        Scholarship opportunities can depend on
        academic performance, eligibility criteria,
        student category and applicable schemes.<br><br>

        Check the official scholarship information
        for current schemes and deadlines.
        `;

    }


    // ========================================================
    // PLACEMENT
    // ========================================================

    if (
        hasAny(text, [
            "placement",
            "placements",
            "campus placement",
            "placement cell",
            "placement department",
            "recruitment",
            "campus recruitment"
        ])
    ) {

        return `
        🚀 <b>Placements</b><br><br>

        A college placement cell may support students
        through company drives, aptitude tests,
        interviews, career guidance and recruitment
        activities.<br><br>

        Current companies, eligibility and placement
        schedules depend on the institution.
        `;

    }


    // ========================================================
    // INTERNSHIP
    // ========================================================

    if (
        hasAny(text, [
            "internship",
            "internships",
            "intern",
            "summer internship",
            "industrial training",
            "training opportunity"
        ])
    ) {

        return `
        💡 <b>Internships</b><br><br>

        Internships provide practical exposure
        and industry experience.<br><br>

        Students can check college placement
        services, training departments and
        company opportunities.
        `;

    }


    // ========================================================
    // JOBS
    // ========================================================

    if (
        hasAny(text, [
            "job",
            "jobs",
            "career",
            "career opportunity",
            "employment",
            "job opportunity",
            "recruitment drive"
        ])
    ) {

        return `
        💼 <b>Career & Jobs</b><br><br>

        Students can explore campus placements,
        internships, job portals, company career
        pages and career-development programs.<br><br>

        Building technical, communication and
        problem-solving skills can also support
        career preparation.
        `;

    }


    // ========================================================
    // DOCUMENTS
    // ========================================================

    if (
        hasAny(text, [
            "document",
            "documents",
            "required documents",
            "admission documents",
            "certificate",
            "certificates",
            "papers",
            "proof"
        ])
    ) {

        return `
        📄 <b>Documents</b><br><br>

        Depending on the process, students may
        need academic certificates, identity proof,
        photographs and other required documents.<br><br>

        Always confirm the exact document list
        with the college.
        `;

    }


    // ========================================================
    // ID CARD
    // ========================================================

    if (
        hasAny(text, [
            "id card",
            "identity card",
            "college id",
            "student id",
            "lost id card",
            "id card replacement"
        ])
    ) {

        return `
        🪪 <b>Student ID Card</b><br><br>

        Student ID cards are generally used
        for identification and access to
        college services.<br><br>

        Contact the administration office
        for new or replacement ID cards.
        `;

    }


    // ========================================================
    // TRANSPORT
    // ========================================================

    if (
        hasAny(text, [
            "transport",
            "college bus",
            "bus facility",
            "bus route",
            "bus timing",
            "student transport"
        ])
    ) {

        return `
        🚌 <b>College Transport</b><br><br>

        Some institutions provide transport
        facilities for students.<br><br>

        Routes, timings, fees and availability
        depend on the college.
        `;

    }


    // ========================================================
    // CANTEEN
    // ========================================================

    if (
        hasAny(text, [
            "canteen",
            "college canteen",
            "food",
            "mess",
            "mess food",
            "cafeteria"
        ])
    ) {

        return `
        🍴 <b>Canteen & Mess</b><br><br>

        College campuses may have canteens,
        cafeterias or hostel mess facilities.<br><br>

        Timings, menu and prices depend
        on the institution.
        `;

    }


    // ========================================================
    // SPORTS
    // ========================================================

    if (
        hasAny(text, [
            "sports",
            "sport facility",
            "playground",
            "gym",
            "football",
            "cricket",
            "basketball",
            "volleyball",
            "sports club"
        ])
    ) {

        return `
        🏆 <b>Sports & Recreation</b><br><br>

        Colleges may provide sports grounds,
        indoor facilities, fitness areas and
        sports clubs.<br><br>

        Available facilities depend on the campus.
        `;

    }


    // ========================================================
    // EVENTS
    // ========================================================

    if (
        hasAny(text, [
            "event",
            "events",
            "college event",
            "fest",
            "festival",
            "annual day",
            "cultural event",
            "technical event"
        ])
    ) {

        return `
        🎉 <b>College Events</b><br><br>

        College events can include cultural fests,
        technical events, workshops, seminars,
        competitions and annual celebrations.<br><br>

        Check the official college notice board
        or student activity channels for dates.
        `;

    }


    // ========================================================
    // CLUBS
    // ========================================================

    if (
        hasAny(text, [
            "club",
            "clubs",
            "student club",
            "technical club",
            "cultural club",
            "coding club",
            "student activities"
        ])
    ) {

        return `
        🎯 <b>Student Clubs</b><br><br>

        Student clubs can provide opportunities
        to participate in technical, cultural,
        sports and extracurricular activities.<br><br>

        Available clubs vary by college.
        `;

    }


    // ========================================================
    // FEST / CULTURAL
    // ========================================================

    if (
        hasAny(text, [
            "cultural fest",
            "college fest",
            "technical fest",
            "fest details",
            "cultural program"
        ])
    ) {

        return `
        🎪 <b>College Fest</b><br><br>

        College fests may include competitions,
        performances, technical activities,
        workshops and student events.<br><br>

        Check official college announcements
        for current event details.
        `;

    }


    // ========================================================
    // TIMINGS
    // ========================================================

    if (
        hasAny(text, [
            "college timing",
            "college timings",
            "college hours",
            "office timing",
            "working hours",
            "when college opens",
            "when college closes"
        ])
    ) {

        return `
        ⏰ <b>College Timings</b><br><br>

        College and department timings can vary
        depending on the academic schedule.<br><br>

        Please check the current timetable
        or contact the college office.
        `;

    }


    // ========================================================
    // LOCATION
    // ========================================================

    if (
        hasAny(text, [
            "location",
            "address",
            "college address",
            "where is college",
            "where is the college",
            "college location",
            "how to reach college"
        ])
    ) {

        return `
        📍 <b>College Location</b><br><br>

        For the exact address and directions,
        please check the official college website
        or Google Maps.
        `;

    }


    // ========================================================
    // CONTACT
    // ========================================================

    if (
        hasAny(text, [
            "contact",
            "contact number",
            "phone number",
            "telephone",
            "email",
            "email address",
            "college phone"
        ])
    ) {

        return `
        📞 <b>College Contact</b><br><br>

        For official phone numbers, email addresses
        and department contacts, please use the
        college's official contact information.
        `;

    }


    // ========================================================
    // PRINCIPAL
    // ========================================================

    if (
        hasAny(text, [
            "principal",
            "college principal",
            "who is principal"
        ])
    ) {

        return `
        🏫 <b>Principal</b><br><br>

        The principal is responsible for academic
        and administrative leadership of the college.<br><br>

        For the current principal's name and official
        details, check the college website.
        `;

    }


    // ========================================================
    // FACULTY
    // ========================================================

    if (
        hasAny(text, [
            "faculty",
            "professor",
            "professors",
            "teachers",
            "teacher",
            "lecturer",
            "staff"
        ])
    ) {

        return `
        👨‍🏫 <b>Faculty & Staff</b><br><br>

        Faculty members support students through
        teaching, practical sessions, projects,
        examinations and academic guidance.<br><br>

        Check the department page for the
        current faculty directory.
        `;

    }


    // ========================================================
    // DEPARTMENT
    // ========================================================

    if (
        hasAny(text, [
            "department office",
            "department information",
            "hod",
            "head of department",
            "hod name"
        ])
    ) {

        return `
        🏫 <b>Department</b><br><br>

        Each academic department generally has
        faculty, a department office and academic
        activities specific to its program.<br><br>

        Contact your department office for
        specific information.
        `;

    }


    // ========================================================
    // SYLLABUS
    // ========================================================

    if (
        hasAny(text, [
            "syllabus",
            "course syllabus",
            "subject syllabus",
            "curriculum",
            "subjects",
            "subject list"
        ])
    ) {

        return `
        📚 <b>Syllabus & Curriculum</b><br><br>

        The syllabus depends on the academic
        program, semester and university structure.<br><br>

        Check the official academic department
        or university syllabus for the latest version.
        `;

    }


    // ========================================================
    // PRACTICALS
    // ========================================================

    if (
        hasAny(text, [
            "practical",
            "practicals",
            "lab",
            "laboratory",
            "lab exam",
            "practical exam"
        ])
    ) {

        return `
        🔬 <b>Practicals & Labs</b><br><br>

        Practical sessions allow students to
        apply concepts through laboratory work,
        experiments and projects.<br><br>

        Lab schedules and requirements depend
        on the course.
        `;

    }


    // ========================================================
    // PROJECT
    // ========================================================

    if (
        hasAny(text, [
            "project",
            "final year project",
            "mini project",
            "major project",
            "project guidance"
        ])
    ) {

        return `
        💻 <b>Academic Projects</b><br><br>

        Projects help students apply their
        academic knowledge to practical problems.<br><br>

        Project requirements, evaluation and
        submission dates depend on the program.
        `;

    }


    // ========================================================
    // ASSIGNMENT
    // ========================================================

    if (
        hasAny(text, [
            "assignment",
            "assignments",
            "homework",
            "submission",
            "assignment submission"
        ])
    ) {

        return `
        📋 <b>Assignments</b><br><br>

        Assignments are generally used to evaluate
        understanding and practical application
        of course concepts.<br><br>

        Check your faculty instructions for
        submission dates and requirements.
        `;

    }


    // ========================================================
    // BONAFIDE
    // ========================================================

    if (
        hasAny(text, [
            "bonafide",
            "bonafide certificate",
            "student certificate"
        ])
    ) {

        return `
        📄 <b>Bonafide Certificate</b><br><br>

        A bonafide certificate generally confirms
        that a student is enrolled at the institution.<br><br>

        Contact the college office or student
        administration section for the application process.
        `;

    }


    // ========================================================
    // TRANSFER CERTIFICATE
    // ========================================================

    if (
        hasAny(text, [
            "transfer certificate",
            "tc certificate",
            "tc",
            "leaving certificate",
            "lc"
        ])
    ) {

        return `
        📄 <b>Transfer / Leaving Certificate</b><br><br>

        Transfer or leaving certificates are
        generally issued through the appropriate
        college administration process.<br><br>

        Contact the office for required documents
        and procedure.
        `;

    }


    // ========================================================
    // MIGRATION
    // ========================================================

    if (
        hasAny(text, [
            "migration certificate",
            "migration",
            "university migration"
        ])
    ) {

        return `
        📄 <b>Migration Certificate</b><br><br>

        Migration requirements depend on the
        university and student's academic situation.<br><br>

        Contact the college or university
        administration for the applicable process.
        `;

    }


    // ========================================================
    // BONAFIDE / NOC
    // ========================================================

    if (
        hasAny(text, [
            "noc",
            "no objection certificate",
            "noc certificate"
        ])
    ) {

        return `
        📄 <b>NOC</b><br><br>

        A No Objection Certificate may be required
        for certain academic or administrative processes.<br><br>

        Contact the college administration to
        confirm the requirement and procedure.
        `;

    }


    // ========================================================
    // LEAVE
    // ========================================================

    if (
        hasAny(text, [
            "leave",
            "college leave",
            "leave application",
            "holiday",
            "holidays",
            "vacation"
        ])
    ) {

        return `
        🗓️ <b>Leave & Holidays</b><br><br>

        Leave rules and academic holidays depend
        on the college calendar and department policies.<br><br>

        Check the official academic calendar
        for current dates.
        `;

    }


    // ========================================================
    // ORIENTATION
    // ========================================================

    if (
        hasAny(text, [
            "orientation",
            "orientation program",
            "freshers",
            "freshers program",
            "induction"
        ])
    ) {

        return `
        🎓 <b>Orientation</b><br><br>

        Orientation or induction programs help
        new students understand academics,
        campus facilities, rules and student services.
        `;

    }


    // ========================================================
    // ANTI RAGGING
    // ========================================================

    if (
        hasAny(text, [
            "ragging",
            "anti ragging",
            "anti-ragging",
            "ragging rules"
        ])
    ) {

        return `
        🛡️ <b>Anti-Ragging</b><br><br>

        Colleges generally maintain anti-ragging
        policies and procedures to protect students.<br><br>

        If you need to report or understand a
        specific situation, contact the designated
        college authority or anti-ragging committee.
        `;

    }


    // ========================================================
    // GRIEVANCE
    // ========================================================

    if (
        hasAny(text, [
            "grievance",
            "complaint",
            "student complaint",
            "complaint cell",
            "grievance cell"
        ])
    ) {

        return `
        🛡️ <b>Student Grievance</b><br><br>

        Colleges may have a grievance cell or
        designated authority for student concerns.<br><br>

        Contact the appropriate college office
        for the official complaint procedure.
        `;

    }


    // ========================================================
    // CAREER GUIDANCE
    // ========================================================

    if (
        hasAny(text, [
            "career guidance",
            "career advice",
            "career development",
            "career counseling",
            "career counselling"
        ])
    ) {

        return `
        🎯 <b>Career Guidance</b><br><br>

        Career preparation can include skill
        development, internships, projects,
        resume building, interviews and
        industry exposure.<br><br>

        Your college placement or career cell
        may provide additional support.
        `;

    }


    // ========================================================
    // RESUME
    // ========================================================

    if (
        hasAny(text, [
            "resume",
            "cv",
            "curriculum vitae",
            "resume help",
            "cv help"
        ])
    ) {

        return `
        📄 <b>Resume</b><br><br>

        A student resume can include education,
        technical skills, projects, internships,
        certifications and relevant achievements.<br><br>

        Keep it clear, concise and focused on
        the role you're applying for.
        `;

    }


    // ========================================================
    // INTERVIEW
    // ========================================================

    if (
        hasAny(text, [
            "interview",
            "interview preparation",
            "placement interview",
            "hr interview",
            "technical interview"
        ])
    ) {

        return `
        🎯 <b>Interview Preparation</b><br><br>

        Prepare your core technical concepts,
        projects, communication skills and
        common HR questions.<br><br>

        Practice explaining your projects clearly
        and confidently.
        `;

    }


    // ========================================================
    // SKILLS
    // ========================================================

    if (
        hasAny(text, [
            "skills",
            "technical skills",
            "student skills",
            "skills for job",
            "what skills should i learn"
        ])
    ) {

        return `
        💻 <b>Skills</b><br><br>

        Useful skills depend on your target career.<br><br>

        For technology careers, students often
        work on programming, databases, web
        development, Git, problem solving and
        communication skills.
        `;

    }


    // ========================================================
    // COMPUTER / IT
    // ========================================================

    if (
        hasAny(text, [
            "computer science",
            "information technology",
            "it department",
            "computer engineering",
            "software engineering",
            "coding"
        ])
    ) {

        return `
        💻 <b>Technology Programs</b><br><br>

        Technology-focused programs commonly
        cover programming, databases, software
        development, computer networks and
        related technical subjects.<br><br>

        Exact subjects depend on the academic program.
        `;

    }


    // ========================================================
    // HOSTEL RULES
    // ========================================================

    if (
        hasAny(text, [
            "hostel rules",
            "hostel regulations",
            "hostel policy",
            "hostel discipline"
        ])
    ) {

        return `
        🏠 <b>Hostel Rules</b><br><br>

        Hostel rules can cover timings, visitors,
        discipline, room allocation, cleanliness
        and safety requirements.<br><br>

        Follow the rules issued by your college hostel
        administration.
        `;

    }


    // ========================================================
    // CAMPUS FACILITIES
    // ========================================================

    if (
        hasAny(text, [
            "campus facilities",
            "college facilities",
            "facilities",
            "campus",
            "infrastructure"
        ])
    ) {

        return `
        🏫 <b>Campus Facilities</b><br><br>

        Depending on the institution, campus
        facilities can include classrooms,
        laboratories, library, sports areas,
        canteen, hostel, transportation and
        student activity spaces.
        `;

    }


    // ========================================================
    // WIFI
    // ========================================================

    if (
        hasAny(text, [
            "wifi",
            "wi fi",
            "internet",
            "college internet",
            "campus wifi"
        ])
    ) {

        return `
        📶 <b>Campus Internet</b><br><br>

        Some colleges provide Wi-Fi or internet
        access for students and staff.<br><br>

        Availability, login requirements and
        usage rules depend on the institution.
        `;

    }


    // ========================================================
    // PARKING
    // ========================================================

    if (
        hasAny(text, [
            "parking",
            "bike parking",
            "car parking",
            "vehicle parking"
        ])
    ) {

        return `
        🅿️ <b>Parking</b><br><br>

        Parking availability and rules depend
        on the campus.<br><br>

        Contact college administration or security
        for current parking information.
        `;

    }


    // ========================================================
    // MEDICAL
    // ========================================================

    if (
        hasAny(text, [
            "medical",
            "medical facility",
            "health center",
            "first aid",
            "doctor",
            "emergency"
        ])
    ) {

        return `
        🏥 <b>Medical Support</b><br><br>

        Some campuses provide first-aid,
        health-center or medical-support services.<br><br>

        For an emergency, contact the appropriate
        emergency service or campus authority immediately.
        `;

    }


    // ========================================================
    // SECURITY
    // ========================================================

    if (
        hasAny(text, [
            "security",
            "campus security",
            "college security",
            "safety"
        ])
    ) {

        return `
        🛡️ <b>Campus Safety</b><br><br>

        Colleges generally have security procedures
        and designated authorities for campus safety.<br><br>

        Contact campus security or administration
        for institution-specific information.
        `;

    }


    // ========================================================
    // ONLINE CLASSES
    // ========================================================

    if (
        hasAny(text, [
            "online class",
            "online classes",
            "online lecture",
            "virtual class",
            "online learning"
        ])
    ) {

        return `
        💻 <b>Online Classes</b><br><br>

        Online learning arrangements depend on
        the college and academic program.<br><br>

        Check official notices or your department
        communication channels for schedules.
        `;

    }


    // ========================================================
    // LMS
    // ========================================================

    if (
        hasAny(text, [
            "lms",
            "learning management system",
            "student portal",
            "college portal",
            "online portal"
        ])
    ) {

        return `
        🖥️ <b>Student Portal</b><br><br>

        A student portal or LMS may provide access
        to academic notices, materials, assignments,
        attendance and other student services.<br><br>

        Login details and available features depend
        on the institution.
        `;

    }


    // ========================================================
    // EMAIL
    // ========================================================

    if (
        hasAny(text, [
            "college email",
            "student email",
            "official email",
            "email id"
        ])
    ) {

        return `
        📧 <b>College Email</b><br><br>

        Some institutions provide official email
        accounts to students.<br><br>

        Contact the college IT or administration
        department for account and login details.
        `;

    }


    // ========================================================
    // TRANSFER / CHANGE COURSE
    // ========================================================

    if (
        hasAny(text, [
            "change course",
            "change branch",
            "change department",
            "transfer department",
            "branch change"
        ])
    ) {

        return `
        🔄 <b>Course / Branch Change</b><br><br>

        Course or branch changes may be possible
        under specific institutional and university
        rules.<br><br>

        Contact your academic office for eligibility
        and procedure.
        `;

    }


    // ========================================================
    // BACKLOG
    // ========================================================

    if (
        hasAny(text, [
            "backlog",
            "backlogs",
            "kt",
            "failed subject",
            "reappear",
            "supplementary exam"
        ])
    ) {

        return `
        📚 <b>Backlog / Re-examination</b><br><br>

        Students with an unsuccessful subject may
        have opportunities to reappear according
        to university rules.<br><br>

        Check the examination department for
        current regulations and dates.
        `;

    }


    // ========================================================
    // GRADING
    // ========================================================

    if (
        hasAny(text, [
            "grading system",
            "cgpa",
            "sgpa",
            "grade point",
            "percentage",
            "grading"
        ])
    ) {

        return `
        📊 <b>Grading System</b><br><br>

        Colleges and universities may use systems
        such as marks, grades, SGPA or CGPA.<br><br>

        The exact calculation method depends
        on the applicable academic regulations.
        `;

    }


    // ========================================================
    // TRANSCRIPT
    // ========================================================

    if (
        hasAny(text, [
            "transcript",
            "academic transcript",
            "marksheet",
            "mark sheet"
        ])
    ) {

        return `
        📄 <b>Academic Transcript</b><br><br>

        An academic transcript records a student's
        academic performance across courses or semesters.<br><br>

        Contact the examination or administration
        office for transcript requests.
        `;

    }


    // ========================================================
    // DEGREE CERTIFICATE
    // ========================================================

    if (
        hasAny(text, [
            "degree certificate",
            "degree",
            "graduation certificate",
            "convocation"
        ])
    ) {

        return `
        🎓 <b>Degree & Graduation</b><br><br>

        Degree certificates are generally issued
        after successful completion of the academic
        requirements.<br><br>

        The issuing process depends on the
        college or university.
        `;

    }


    // ========================================================
    // ALUMNI
    // ========================================================

    if (
        hasAny(text, [
            "alumni",
            "alumni association",
            "old students",
            "former students"
        ])
    ) {

        return `
        🤝 <b>Alumni</b><br><br>

        Alumni networks connect former students
        and may support networking, events,
        mentoring and career opportunities.<br><br>

        Contact the college for its current
        alumni activities.
        `;

    }


    // ========================================================
    // PARENTS
    // ========================================================

    if (
        hasAny(text, [
            "parent meeting",
            "parents meeting",
            "parent teacher meeting",
            "ptm"
        ])
    ) {

        return `
        👨‍👩‍👧 <b>Parent Meetings</b><br><br>

        Parent meetings may be organized to
        discuss academic progress, attendance
        and student development.<br><br>

        Check college notices for the schedule.
        `;

    }


    // ========================================================
    // RULES
    // ========================================================

    if (
        hasAny(text, [
            "college rules",
            "college regulations",
            "student rules",
            "discipline",
            "dress code"
        ])
    ) {

        return `
        📋 <b>College Rules</b><br><br>

        College rules may cover attendance,
        examinations, discipline, campus conduct,
        safety and academic procedures.<br><br>

        Students should follow the official
        rules issued by their institution.
        `;

    }


    // ========================================================
    // THANK YOU
    // ========================================================

    if (
        hasAny(text, [
            "thank you",
            "thanks",
            "thank",
            "thx",
            "thankyou"
        ])
    ) {

        return `
        😊 <b>You're welcome!</b><br><br>

        Flesha is always happy to help. ✦
        `;

    }


    // ========================================================
    // GOODBYE
    // ========================================================

    if (
        hasAny(text, [
            "bye",
            "goodbye",
            "see you",
            "see ya"
        ])
    ) {

        return `
        👋 <b>Goodbye!</b><br><br>

        Take care and keep learning! 🚀<br><br>

        See you again on Flesha AI.
        `;

    }


    // ========================================================
    // SMART GENERAL RESPONSE
    // ========================================================

    return `
        ✦ <b>Flesha AI</b><br><br>

        I can help you with a wide range of
        college-related information.<br><br>

        Try asking about <b>admission, eligibility,
        courses, fees, exams, results, attendance,
        library, hostel, scholarships, placements,
        internships, documents, projects, faculty,
        departments, campus facilities, transport,
        canteen, sports, events, student clubs,
        certificates, career guidance</b> or
        other college services.<br><br>

        <b>Ask your question and I'll help you.</b> ✨
    `;

}


// ============================================================
// KEYWORD HELPER
// ============================================================

function hasAny(text, keywords) {

    return keywords.some(keyword =>
        text.includes(keyword)
    );

}


// ============================================================
// ENTER KEY
// ============================================================

input.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);


// ============================================================
// CLEAR CHAT
// ============================================================

function clearChat() {

    chatBox.innerHTML = `

        <div class="message bot">

            <div class="message-icon">
                F
            </div>

            <div class="message-content">

                <strong>Flesha</strong>

                <p>
                    Chat cleared successfully ✨
                    <br><br>
                    What would you like to know?
                </p>

            </div>

        </div>

    `;

}