// const audio = document.getElementById("audio");
const music = document.getElementById("audio");
const playPause = document.getElementById("play");
const backBtn = document.getElementById("backward");
const forwardBtn = document.getElementById("forward");
const progressBar = document.getElementById("progress");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const durationTime = document.getElementById("duration-time");

const songs = ["music-1", "music-2"];

let songIndex = 1;

const loadingSong = (song) => {
  title.innerHTML = song;
  audio.src = `musics/${song}.mp3`;
  cover.src = `images/cover-${song}.jpg`;
};

loadingSong(songs[songIndex]);

const playSong = () => {
  playPause.querySelector(".pause-btn").classList.add("hide");
  playPause.querySelector(".play-btn").classList.remove("hide");
};

playAndPause = () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.pause();
  }
};

playPause.addEventListener("click", playAndPause);

const nextMusic = () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadingSong(songs[songIndex]);

  playPause.querySelector(".pause-btn").classList.remove("hide");
  playPause.querySelector(".play-btn").classList.add("hide");

  audio.play();
};

const prevMusic = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadingSong(songs[songIndex]);

  playPause.querySelector(".pause-btn").classList.remove("hide");
  playPause.querySelector(".play-btn").classList.add("hide");
  audio.play();
};

const progressPercent = (e) => {
  const { duration, currentTime } = audio;
  progressBar.value = (currentTime / duration) * 100;
};

const setProgress = (e) => {
  let { duration, currentTime } = audio;
  const click = e.offsetX;
  progressBar.value = click;
  currentTime = (click / 100) * duration;
};

progressBar.addEventListener("click", setProgress);
backBtn.addEventListener("click", prevMusic);
forwardBtn.addEventListener("click", nextMusic);
music.addEventListener("timeupdate", progressPercent);
