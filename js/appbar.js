const btn = document.querySelector('.toggle');

const btnAbout = document.getElementById("about");
const backdropAbout = document.getElementById("backdrop_about");
const backdropAboutClose = document.getElementById("backdrop_about_close");

btn.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('switch');
})

btnAbout.addEventListener('click',(e)=>{
    backdropAbout.classList.add("show");
})

backdropAboutClose.addEventListener('click',(e)=>{
    backdropAbout.classList.remove("show");
})