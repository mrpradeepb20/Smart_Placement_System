// PLACEMENT PREPARATION TOPICS

const preparationData = {

    aptitude: {
        title: "Aptitude Preparation",
        topics: [
            "Percentage",
            "Profit and Loss",
            "Time and Work",
            "Time, Speed and Distance",
            "Number System",
            "Logical Reasoning",
            "Verbal Ability"
        ]
    },

    python: {
        title: "Python Programming",
        topics: [
            "Python Basics",
            "Variables and Data Types",
            "If-Else Conditions",
            "Loops",
            "Functions",
            "Lists and Dictionaries",
            "OOP Concepts",
            "Exception Handling"
        ]
    },

    technical: {
        title: "Technical Interview",
        topics: [
            "Python Interview Questions",
            "DBMS and SQL",
            "HTML and CSS",
            "JavaScript Basics",
            "Operating Systems",
            "Computer Networks",
            "Data Structures"
        ]
    },

    coding: {
        title: "Coding Practice",
        topics: [
            "Palindrome Number",
            "Reverse a String",
            "Find Largest Number",
            "Prime Number",
            "Fibonacci Series",
            "Factorial Program",
            "Array Problems"
        ]
    },

    hr: {
        title: "HR Interview Questions",
        topics: [
            "Tell me about yourself",
            "What are your strengths?",
            "What are your weaknesses?",
            "Why should we hire you?",
            "Why do you want this job?",
            "Where do you see yourself in 5 years?"
        ]
    },

    tips: {
        title: "Resume and Interview Tips",
        topics: [
            "How to prepare an ATS resume",
            "How to explain your project",
            "How to introduce yourself",
            "Communication skills",
            "Interview body language",
            "How to face technical interviews"
        ]
    }

};


function showTopics(category) {

    const selected = preparationData[category];

    document.getElementById("topicTitle").innerText =
        selected.title;

    let output = "<ul class='topic-list'>";

    selected.topics.forEach(function(topic) {

        output += `
            <li>
                <span>${topic}</span>
                <span class="topic-check">📘</span>
            </li>
        `;

    });

    output += "</ul>";

    document.getElementById("topicContent").innerHTML = output;

}