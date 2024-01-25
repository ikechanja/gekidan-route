let menuBtContainer = $('.hum-menu');
let menuBody = document.querySelector('.hum-menu-body');
let humMenu1 = document.querySelector('.hum-1');
let humMenu2 = document.querySelector('.hum-2');
let humMenu3 = document.querySelector('.hum-3');
menuBtContainer.on('click', function(){
    menuBody.classList.toggle('active');
    humMenu1.classList.toggle('active');
    humMenu2.classList.toggle('active');
    humMenu3.classList.toggle('active');
})