//hamburger start//

const hamburgerIcon = document.querySelector('#nav-toggle-button');
const navItems = document.querySelector('#nav-items');

hamburgerIcon.addEventListener('click', () => {
    navItems.classList.toggle('active');
});
//hamburger end//

//about start//

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
    } else {
        reveals[i].classList.remove("active");
    }
    }
}

window.addEventListener("scroll", reveal);

//about end//