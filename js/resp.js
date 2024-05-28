burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')
navList=document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
  navbar.classList.toggle('v-nav-resp');
  navList.classList.toggle('v-class-resp');


})