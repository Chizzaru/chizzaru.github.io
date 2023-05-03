document.addEventListener("DOMContentLoaded",() => {

    var btn = document.getElementById("btn");
    btn.addEventListener("click", ()=> {
        scroll('#myDiv')
    });


});

function scroll(DivID){
    document.querySelector(DivID).scrollIntoView({
        behavior: 'smooth'
    }); 
}

function hello(){
    alert("hello")
}



