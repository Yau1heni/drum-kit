let audio = document.querySelectorAll("audio");
let keys = document.querySelectorAll('.key');

function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

function clear() {
    for (var i = 0; i < keys.length; i++) {
        if (keys[i].classList.contains("playing")) {
            keys[i].classList.remove("playing");
        }
    }
}

let clickPlaySound = function () {
    clear()
    let id = this.id;
    this.classList.add('playing')
    for (let j = 0; j < keys.length; j++) {
        console.log('audio.dataKey')
        if (audio[j].id === id) {
            audio[j].currentTime = 0;
            audio[j].play();
        }
    }
}

keys.forEach(key => key.addEventListener('click', clickPlaySound));

// switching light and dark theme
const page = document.querySelector('.page')
const themeButton = document.querySelector('.theme-button')

themeButton.onclick = function () {
    page.classList.toggle('dark-theme')
    page.classList.toggle('light-theme')
}

