const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const progress = document.getElementById('progress');

playButton.addEventListener('click', () => {
    audio.play();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});

// Update progress bar as audio plays
audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

// Seek audio when progress bar is changed
progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});