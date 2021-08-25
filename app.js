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
        if (audio[j].id === id) {
            audio[j].currentTime = 0;
            audio[j].play();
        }
    }
}

keys.forEach(key => key.addEventListener('click', clickPlaySound));

// switching light and dark theme

const themeButton = document.querySelector('.theme-button')
themeButton.onclick = function () {

    let theme = document.getElementById('theme')
    if (theme.getAttribute('href') == 'style-dark.css') {
        theme.href = 'style-light.css'
    }
    else {
        theme.href = 'style-dark.css'
    }
}




console.log(
    ' 1. Воспроизвести исходное приложение - 10 баллов; \n 2. Дополнил исходный проект обязательным дополнительным функционалом: звуки проигрываются также при кликах мышкой - 10 баллов; \n 3.Дополнил исходный проект дополнительным функционалом: возможность переключения светлой и темной темы - 10 баллов'
)

