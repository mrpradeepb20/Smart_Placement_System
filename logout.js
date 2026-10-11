function handleStudentLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        window.location.href = "./logout.html";
    }
}