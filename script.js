//hamburger start//

const hamburgerIcon = document.querySelector('#nav-toggle-button');
const navItems = document.querySelector('#nav-items');

hamburgerIcon.addEventListener('click', () => {
    navItems.classList.toggle('active');
});

//hamburger end//

//image slider//

const slides =  document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click',function(){
    counter++;
    carousel();
})
prevBtn.addEventListener('click',function(){
    counter--;
    carousel();
})

function carousel(){
    if(counter === slides.length){
        counter = 0;
    }
    if(counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter *100}%)`;
    });
}

//form start//

function validateForm() {
    const x = document.forms["myForm"]["firstName"]["message"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

//form end//