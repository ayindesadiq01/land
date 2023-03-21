'use strict';
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const menuBar = document.querySelector('.menu-bar');

menuIcon.addEventListener('click',function(){
 menuBar.classList.remove('menuclose');
 menuIcon.style.display ='none'
})
closeIcon.addEventListener('click', function(){
 menuBar.classList.add('menuclose');
 menuIcon.style.display = 'block'
})