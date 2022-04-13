'use strict';

///변수선언
const introVideo = document.querySelector('.intro');
const europeVideo = document.querySelector('.europe');
const seoulVideo = document.querySelector('.seoul');
const introContainer = document.querySelector('.intro_container');
const europeContainer = document.querySelector('.europe_container');
const seoulContainer = document.querySelector('.seoul_container');
const filmWrapper = document.querySelector('.film_wrapper');
const mainWrapper = document.querySelector('.main_wrapper');

///전후 전환 함수
function transition(before, after) {
  before.classList.add('hidden');
  after.classList.remove('hidden');
}

///비디오 캐시 시작 함수
function videoLoad(target) {
  target.preload = 'auto';
}

///메인화면으로 넘어가는 함수
function transitionToMain() {
  transition(introContainer, mainWrapper)
  introContainer.innerHTML = '';
};

///메인화면 로드시 비디오 캐시
function loadFilm() {
  videoLoad(seoulVideo);
  videoLoad(europeVideo);
}

///페이드아웃으로 전환
function fadeoutToMain() {
  introContainer.classList.add('fadeout');

  introContainer.addEventListener('animationend', transitionToMain);
  introContainer.addEventListener('animationend', loadFilm);
}

///본영상으로 넘어가는 함수
function transitionToFilm() {
  transition(mainWrapper, filmWrapper)
};

///페이드아웃으로 전환
function fadeoutToFilm() {
  mainWrapper.classList.add('fadeout');

  mainWrapper.addEventListener('animationend', transitionToFilm)
}

///이벤트리스너 호출
introVideo.addEventListener('ended', fadeoutToMain);
introVideo.addEventListener('click', fadeoutToMain);
mainWrapper.addEventListener('click', fadeoutToFilm);