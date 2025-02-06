const btn = document.querySelector('.toggle');

btn.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('switch');
})