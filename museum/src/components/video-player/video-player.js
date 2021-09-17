'use strict';

//- *** VARIABLES ***
const videoContainer = document.querySelector('.video-player');
const video = document.querySelector('.video-player__screen');
const screenBtn = document.querySelector('.video-player__screen-btn');
const playBtn = document.querySelector('.control-bar__btn--play');
const progressBar = document.querySelector('.control-bar__progress-bar');
const volumeBar = document.querySelector('.control-bar__progress-bar--vol');
const volumeBtn = document.querySelector('.control-bar__btn--vol');
const fullScreenBtn = document.querySelector('.control-bar__btn--fullscreen');
const playback = document.querySelector('.video-player__playback');
const rewind = document.querySelector('.video-player__rewind');
const modal = document.querySelector('.modal');
const timers = new Map();

video.volume = 0.5;

let currentVolume = video.volume;

//- *** PLAY / PAUSE ***
const videoAction = () => {
  if (video.paused) {
    video.play();
    video.style.opacity = '1';
    playBtn.style.backgroundImage = 'url(assets/svg/pause.svg)';
    screenBtn.style.backgroundImage = 'none';
  } else {
    video.pause();
    video.style.opacity = '0.5';
    playBtn.style.backgroundImage = 'url(assets/svg/play-btn.svg)';
    screenBtn.style.backgroundImage = 'url(assets/svg/screen-btn.svg)';
  }
};

screenBtn.addEventListener('click', videoAction);
playBtn.addEventListener('click', videoAction);
video.addEventListener('click', videoAction);
document.addEventListener('keyup', (event) => {
  if (event.code === 'Space' || event.code === 'KeyK') videoAction();
});

//- *** REWIND / PLAYBACK ***
const showElement = (elem) => {
  let timer;
  elem.style.opacity = '1';

  if (timers.has(elem)) clearTimeout(timers.get(elem));

  timer = setTimeout(() => elem.style.opacity = '0', 2000);
  timers.set(elem, timer);
}

//- *** VIDEO PROGRESS ***
const videoProgress = () => {
  progressBar.value = Math.floor(video.currentTime) / (Math.floor(video.duration) / 100);
  progressBar.style.background = `linear-gradient(to right,
                                                  #710707 0%, #710707 ${progressBar.value}%,
                                                  #c4c4c4 ${progressBar.value}%, #c4c4c4 100%)`;
};

const changeVideoTime = (event) => {
  let progress = Math.floor(event.offsetX) / (progressBar.offsetWidth / 100);

  video.currentTime = video.duration * (progress / 100);
};

video.addEventListener('timeupdate', videoProgress);
progressBar.addEventListener('click', changeVideoTime);
video.addEventListener('ended', () => {
  video.currentTime = 0;
  playBtn.style.backgroundImage = 'url(assets/svg/play-btn.svg)';
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyJ') {
    showElement(rewind);

    video.currentTime -= 10;
    rewind.style.backgroundImage = 'url(assets/svg/rewind.svg)';
    rewind.style.backgroundPosition = 'left center';
  }

  if (event.code === 'KeyL') {
    showElement(rewind);

    video.currentTime += 10;
    rewind.style.backgroundImage = 'url(assets/svg/rewind-forward.svg)';
    rewind.style.backgroundPosition = 'right center';
  }
});

document.addEventListener('keyup', (event) => {
  if (isFinite(event.key) && event.code !== 'Space') {
    video.currentTime = video.duration * (event.key / 10);
  }
});

//- *** VIDEO SPEED ***
document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.code === 'Comma') {
    showElement(playback);

    (video.playbackRate <= 0.25) ? video.playbackRate
                                 : video.playbackRate -= 0.25;
  }

  if (event.shiftKey && event.code === 'Period') {
    showElement(playback);

    (video.playbackRate >= 2) ? video.playbackRate
                              : video.playbackRate += 0.25;
  }

  playback.textContent = `${video.playbackRate}x`;
});

//- *** VOLUME ***
const сhangeVolume = () => {
  let volume = volumeBar.value / 100;
  video.volume = volume;

  if (video.volume !== 0) currentVolume = video.volume;

  volumeBar.style.background = `linear-gradient(to right,
                                                #710707 ${volume * 100}%, #710707 ${volume * 100}%,
                                                #c4c4c4 ${volume * 100}%, #c4c4c4 100%)`;

  (video.volume === 0) ? volumeBtn.style.backgroundImage = 'url(assets/svg/mute.svg)'
                       : volumeBtn.style.backgroundImage = 'url(assets/svg/volume-btn.svg)';
};

const muteVolume = () => {
  if (video.volume === 0) {
    video.volume = currentVolume;
    volumeBar.value = video.volume * 100;
    volumeBtn.style.backgroundImage = 'url(assets/svg/volume-btn.svg)';
    volumeBar.style.background = `linear-gradient(to right,
                                                  #710707 ${currentVolume * 100}%, #710707 ${currentVolume * 100}%,
                                                  #c4c4c4 ${currentVolume * 100}%, #c4c4c4 100%)`;
  } else {
    video.volume = 0;
    volumeBar.value = 0;
    volumeBtn.style.backgroundImage = 'url(assets/svg/mute.svg)';
    volumeBar.style.background = `linear-gradient(to right,
                                                  #710707 0%, #710707 0%,
                                                  #c4c4c4 0%, #c4c4c4 100%)`;
  }
};

volumeBtn.addEventListener('click', muteVolume);
volumeBar.addEventListener('change', сhangeVolume);
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyM') muteVolume();
});

//- *** FULLSCREEN ***
const changeScreenMode = () => {
  if (!document.fullscreenElement) {
    videoContainer.requestFullscreen();
    fullScreenBtn.style.backgroundImage = 'url(assets/svg/fullscreen-exit.svg';
  } else {
    document.exitFullscreen();
    fullScreenBtn.style.backgroundImage = 'url(assets/svg/fullscreen-btn.svg';
  }
};

fullScreenBtn.addEventListener('click', changeScreenMode);
video.addEventListener('dblclick', changeScreenMode);
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyF') changeScreenMode();
});

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) fullScreenBtn.style.backgroundImage = 'url(assets/svg/fullscreen-btn.svg';
});