function toggle() {
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', function(){
    navbar.classList.toggle('visible')
});

}
toggle();


const dialog = document.getElementById('dialog');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', function() {

    dialog.setAttribute('open', true);
});

closeBtn.addEventListener('click', function() {

    dialog.removeAttribute('open');
});

