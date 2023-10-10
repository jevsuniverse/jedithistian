// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
var navHeight = $('nav').outerHeight();

// $(document).ready(function () {    
//     $("main").css('margin-top', navHeight);
// });



function navTo(href) {
  $('nav a.active').removeClass('active');
  
  $('nav a[href="' + href + '"]').addClass('active');
}

function scrollTo(href){
  var navHeight = $('nav').height(); // Tambahkan ini jika Anda memiliki variabel navHeight yang digunakan
  $("html, body").animate({ scrollTop: $(href).position().top - navHeight + 1}, 300);
}

$('a.nav-link').click(function (e) { 
  e.preventDefault(); // Aktifkan ini jika Anda ingin mencegah tindakan default dari tautan
  var href = $(this).attr("href");
  
  scrollTo(href);
});

const textArray = ["Database Engineer", "Data Analyst", "Frontend", "UI/UX"];
const typingDelay = 90; // Delay in milliseconds between typing characters
const newTextDelay = 400; // Delay in milliseconds before typing the next text
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById('typing-text');

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingText.textContent = textArray[textIndex].substring(0, charIndex + 1) + '|';
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex >= 0) {
        typingText.textContent = textArray[textIndex].substring(0, charIndex) + '|';
        charIndex--;
        setTimeout(erase, typingDelay);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) {
            textIndex = 0;
        }
        setTimeout(type, newTextDelay);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newTextDelay);
});
