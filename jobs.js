// SEARCH AND FILTER JOBS

function filterJobs() {

    const searchValue = document
        .getElementById("jobSearch")
        .value.toLowerCase();

    const selectedRole = document
        .getElementById("jobFilter")
        .value;

    const jobCards = document.querySelectorAll(".job-card");

    let visibleCount = 0;

    jobCards.forEach(function(job) {

        const jobText = job.innerText.toLowerCase();
        const jobRole = job.getAttribute("data-role");

        const matchesSearch = jobText.includes(searchValue);

        const matchesRole =
            selectedRole === "all" || jobRole === selectedRole;

        if (matchesSearch && matchesRole) {
            job.style.display = "block";
            visibleCount++;
        } else {
            job.style.display = "none";
        }

    });

    document.getElementById("noJobs").style.display =
        visibleCount === 0 ? "block" : "none";
}


// APPLY FOR JOB

function applyJob(jobName) {

    alert(
        "You selected: " + jobName +
        "\n\nJob application feature will be connected to the backend."
    );

}