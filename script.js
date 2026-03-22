const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
    hamburger.addEventListener('click', function () {
        const hamIcon = this.querySelector('.hamburger-icon');
        const crossIcon = this.querySelector('.cross-icon');

        if (hamIcon.style.display === "none") {
            hamIcon.style.display = "inline-block";
            menu.style.display = "none";
            crossIcon.style.display = "none";
        } else {
            crossIcon.style.display = "inline-block";
            hamIcon.style.display = "none";
            menu.style.display = "block";
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {

const hireBtn = document.getElementById("hire-btn");
const contactSection = document.getElementById("contact");

if (hireBtn && contactSection) {
    hireBtn.addEventListener("click", function () {
        contactSection.scrollIntoView({
            behavior: "smooth"
        });
    });
}

});
function Resume() {
        window.open('my_resume.pdf', '_blank');
}