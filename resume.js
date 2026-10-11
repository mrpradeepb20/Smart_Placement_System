const resumeFile = document.getElementById("resumeFile");
const fileName = document.getElementById("fileName");
const uploadBtn = document.getElementById("uploadBtn");
const uploadMessage = document.getElementById("uploadMessage");

let selectedFile = null;

// Select PDF file
resumeFile.addEventListener("change", function () {

    selectedFile = resumeFile.files[0];

    uploadMessage.textContent = "";
    fileName.textContent = "";

    if (!selectedFile) {
        return;
    }

    // Check PDF format
    if (selectedFile.type !== "application/pdf") {
        uploadMessage.textContent = "Please select a PDF file.";
        uploadMessage.style.color = "red";
        resumeFile.value = "";
        selectedFile = null;
        return;
    }

    // Check file size (5 MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
        uploadMessage.textContent = "File size must be below 5 MB.";
        uploadMessage.style.color = "red";
        resumeFile.value = "";
        selectedFile = null;
        return;
    }

    fileName.textContent = "Selected: " + selectedFile.name;

});

// Upload button
uploadBtn.addEventListener("click", function () {

    if (!selectedFile) {
        uploadMessage.textContent = "Please select your resume first.";
        uploadMessage.style.color = "red";
        return;
    }

    uploadMessage.textContent =
        "File selected successfully! Backend upload connection is pending.";

    uploadMessage.style.color = "green";

});