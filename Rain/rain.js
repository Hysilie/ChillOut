const body = document.body;
const playButton = document.querySelector(".play")
const icon = document.querySelector('i')
const audio = new Audio("./sadday.mp3")



// waterDrop function 

setInterval(rainFall, 20);

function rainFall() {
    const waterDrop = document.createElement('i');

    waterDrop.classList.add('fa-solid');
    waterDrop.classList.add('fa-droplet');
    waterDrop.style.fontSize = Math.random()* 10 + "px";
    waterDrop.style.animationDuration = Math.random() * 5 + "s";
    waterDrop.style.opacity = Math.random() + 0.2;

    waterDrop.style.left = Math.random() * 100 + "%";

    body.appendChild(waterDrop)

    setTimeout(() =>{
    waterDrop.remove();
}, 6000)
}

// music function 

function changeIcon(){
icon.classList.add('fa-solid')
icon.classList.toggle('fa-play')
icon.classList.toggle('fa-stop');
}

function playMusic() {
    if (audio.paused){
        audio.play();
        audio.loop();
    } else { 
        audio.pause()
        audio.currentTime = 0;
        
    }
}

playButton.addEventListener('click', ()=> {
     playMusic();
     changeIcon();
    }) 







