function callAPI() {
    // Replace with your API call logic
    alert("Calling API to book now...");
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function scrollToBookingForm() {
    const bookingForm = document.getElementById('booking-form');
    bookingForm.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const closeBtnContainer = document.getElementById('close-btn-container');

    // Create and insert the cross button
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtnContainer.appendChild(closeBtn);

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Close menu on cross button click
    closeBtn.addEventListener('click', function () {
        navLinks.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = event.target.closest('.navbar');
        const isClickOnHamburger = event.target.closest('#hamburger');

        if (!isClickInsideNavbar && !isClickOnHamburger) {
            navLinks.classList.remove('active');
        }
    });
});