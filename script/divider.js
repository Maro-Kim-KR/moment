'use strict';

///const europeVideo = document.querySelector('.europe');

function heightHandler(event) {
  const mouseY = event.clientY;
  if(mouseY<10){
    europeVideo.style.height = `${0}px`;
  } else europeVideo.style.height = `${mouseY}px`;
  
}

document.addEventListener('mousemove', heightHandler);