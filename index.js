const body = document.body;
const playButton = document.querySelector(".play")
const icon = document.querySelector('i')
const audio = new Audio("./winter.mp3")



// circle function 

setInterval(circlePop, 800);

function circlePop() {
    const circle = document.createElement('i');

    circle.classList.add('fa-solid');
    circle.classList.add('fa-circle');
    circle.style.fontSize = Math.random()* 100 + "px";
    circle.style.animationDuration = Math.random() * 100 + "s";
    circle.style.opacity = Math.random() + 0.2;
    circle.style.top = Math.random() * 100 + "%"
    circle.style.left = Math.random() * 100 + "%";

    body.appendChild(circle)

    setTimeout(() =>{
        circle.remove();
}, 8000)
}

// Welcome box checked 

const welcomeCheck = document.querySelector('.welcome')

welcomeCheck.addEventListener("input", (e)=>{
    if (e.target.value == "on") {
        welcomeCheck.remove();
    }
})