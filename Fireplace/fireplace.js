const firePlace = document.querySelector(".fireplace");
const playButton = document.querySelector(".play")
const icon = document.querySelector('i')
const audio = new Audio("fireplace.mp3")

// sparkles function
setInterval(sparkles, 100);

function sparkles() {
    const sparkles = document.createElement('i');

    sparkles.classList.add('fa-solid');
    sparkles.classList.add('fa-arrows-to-dot');
    sparkles.style.fontSize = Math.random()* 20 + "px";
    sparkles.style.animationDuration = Math.random() * 8 + "s";
    sparkles.style.opacity = Math.random();

    sparkles.style.left = Math.random() * 100 + "%";
    sparkles.style.top = Math.random()*  100 + "%";

    firePlace.appendChild(sparkles)

    setTimeout(() =>{
        sparkles.remove();
}, 6000)}

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