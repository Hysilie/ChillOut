const body = document.body;
const playButton = document.querySelector(".play")
const icon = document.querySelector('i')
const audio = new Audio("./winter.mp3")



// snowflake function 

setInterval(snowFall, 20);

function snowFall() {
    const snowFlake = document.createElement('i');

    snowFlake.classList.add('fa-solid');
    snowFlake.classList.add('fa-snowflake');
    snowFlake.style.fontSize = Math.random()* 50 + "px";
    snowFlake.style.animationDuration = Math.random() * 100 + "s";
    snowFlake.style.opacity = Math.random() + 0.2;
    snowFlake.style.top = Math.random() * 100 + "%"
    snowFlake.style.left = Math.random() * 100 + "%";

    body.appendChild(snowFlake)

    setTimeout(() =>{
        snowFlake.remove();
}, 8000)
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







