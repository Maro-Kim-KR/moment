'use strict';

let moment = bodymovin.loadAnimation({
  container: document.getElementById('moment_container'), // Required
  path: '../video/moment.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})