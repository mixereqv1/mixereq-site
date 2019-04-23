// smooth links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// sticky menu
window.onscroll = function() {myFunction()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset - 25 >= sticky) {
    navbar.classList.add("sticky",'sticky_fixed')
  } else {
    navbar.classList.remove("sticky",'sticky_fixed');
  }
}

// textarea auto-expand
const textarea = document.getElementById('message');
textarea.addEventListener('keydown',function(){
    let el = this;
    setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    })
})

//responsive nav
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let toggleIcon = document.querySelector('.toggle-icon');

navBarToggle.addEventListener('click', function () {  
    mainNav.classList.toggle('active');
    if(toggleIcon.className == 'fas fa-bars toggle-icon'){
      toggleIcon.className = 'fas fa-times toggle-icon clicked';
    }
    else{
      toggleIcon.className = 'fas fa-bars toggle-icon';
    }
});

//after click on nav link menu collapse on mobile
let nav_links = document.querySelectorAll('.nav-links');
for(let i=0; i<4; i++){
  nav_links[i].addEventListener('click',function(){
    mainNav.classList.remove('active');
    toggleIcon.className = 'fas fa-bars toggle-icon';
  })
}