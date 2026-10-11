const analyzerFile = document.getElementById("analyzerFile");
const analyzerFileName = document.getElementById("analyzerFileName");
const analyzeBtn = document.getElementById("analyzeBtn");
const targetRole = document.getElementById("targetRole");
const analyzerMessage = document.getElementById("analyzerMessage");

const resultPlaceholder = document.getElementById("resultPlaceholder");
const demoResult = document.getElementById("demoResult");
const selectedRoleResult = document.getElementById("selectedRoleResult");

let selectedResume = null;

// Select resume
analyzerFile.addEventListener("change", function () {

    selectedResume = analyzerFile.files[0];

    analyzerMessage.textContent = "";
    analyzerFileName.textContent = "No file selected";

    if (!selectedResume) {
        return;
    }

    if (selectedResume.type !== "application/pdf") {
        analyzerMessage.textContent = "Please select a PDF file.";
        analyzerMessage.style.color = "red";
        analyzerFile.value = "";
        selectedResume = null;
        return;
    }

    if (selectedResume.size > 5 * 1024 * 1024) {
        analyzerMessage.textContent = "File size must be below 5 MB.";
        analyzerMessage.style.color = "red";
        analyzerFile.value = "";
        selectedResume = null;
        return;
    }

    analyzerFileName.textContent = selectedResume.name;

});

// Analyze button
analyzeBtn.addEventListener("click", function () {

    if (!selectedResume) {
        analyzerMessage.textContent = "Please upload your resume first.";
        analyzerMessage.style.color = "red";
        return;
    }

    if (targetRole.value === "") {
        analyzerMessage.textContent = "Please select your target job role.";
        analyzerMessage.style.color = "red";
        return;
    }

    analyzerMessage.textContent = "Resume selected successfully!";
    analyzerMessage.style.color = "green";

    resultPlaceholder.hidden = true;
    demoResult.hidden = false;

    selectedRoleResult.textContent =
        "Selected Job Role: " + targetRole.value;

});