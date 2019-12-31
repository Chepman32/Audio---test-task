const audio = document.querySelector('audio');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');
const estimatedTimeEl = document.querySelector('.estimatedTime');

let wasVideoPlaying = false;
let progressIdentifier = null;

window.addEventListener('load',  () => {
    timing.min = 0;
    timing.max = audio.duration;
});

pauseBtn.addEventListener('click',  () => {
    if (!audio.paused) {
        audio.pause();
        clearInterval(progressIdentifier);
    }
});

playBtn.addEventListener('click',  () => {
    if (audio.paused) {
        audio.play();
        progressIdentifier = setInterval(changeProgress, 100);
    }
});

timing.addEventListener('change', event => {
    audio.currentTime = timing.value;
    if (wasVideoPlaying) {
        audio.play();
        progressIdentifier = setInterval(changeProgress, 100);
    }
});

timing.addEventListener('mousedown', event => {
    clearInterval(progressIdentifier);
    wasVideoPlaying = !audio.paused;
    if (wasVideoPlaying) {
        audio.pause();
    }
});

let changeProgress = () => {
    timing.value = audio.currentTime;
    currentTimeEl.innerText = audio.currentTime;
    estimatedTimeEl.innerText = audio.duration - audio.currentTime;
}

volume.addEventListener('change',  () => {
    audio.volume = volume.value;
});
document.querySelector(".playback05").addEventListener("click", () => {
    audio.playbackRate = 0.5
});
document.querySelector(".playback1").addEventListener("click", () => {
    audio.playbackRate = 1;
});
document.querySelector(".playback1-25").addEventListener("click", () => {
    audio.playbackRate = 1.25;
});
document.querySelector(".playback1-5").addEventListener("click", () => {
    audio.playbackRate = 1.5;
});
document.querySelector(".playback1-75").addEventListener("click", () => {
    audio.playbackRate = 1.75;
});
document.querySelector(".playback2").addEventListener("click", () => {
    audio.playbackRate = 2;
});
document.querySelector(".playback2-5").addEventListener("click", () => {
    audio.playbackRate = 2.5;
});