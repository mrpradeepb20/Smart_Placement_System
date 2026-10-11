// APPLICATION SEARCH AND FILTER

function filterApplications() {

    const searchValue = document
        .getElementById("searchApplication")
        .value.toLowerCase();

    const selectedStatus = document
        .getElementById("statusFilter")
        .value;

    const rows = document.querySelectorAll(
        "#applicationData tr"
    );

    let visibleCount = 0;

    rows.forEach(function(row) {

        const rowText = row.innerText.toLowerCase();
        const rowStatus = row.getAttribute("data-status");

        const matchesSearch = rowText.includes(searchValue);

        const matchesStatus =
            selectedStatus === "all" ||
            rowStatus === selectedStatus;

        if (matchesSearch && matchesStatus) {
            row.style.display = "";
            visibleCount++;
        } else {
            row.style.display = "none";
        }

    });

    document.getElementById("noApplications").style.display =
        visibleCount === 0 ? "block" : "none";
}