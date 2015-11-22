(function(document) {
  'use strict';

  var home = null;

  function createVideoThumb(videoData) {
    var pM = document.createElement('paper-material');
    pM.elevation = '1';
    var vT = document.createElement('video-thumbnail');
    for (let d in videoData) {
      vT[d] = videoData[d];
    }
    pM.appendChild(vT);
    home.appendChild(pM);
  }

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    home = document.querySelector('section[data-route="home"]');
    var data = {
      title: "Sample Title 1",
      artist: "Cameron Pittman",
      shortDescription: "This is Cam's awesome video",
      imageURL: "http://fistfuloftalent.com/wp-content/uploads/2013/04/awesome-interview-questions-for-candidates-600x320.jpg"
    }
    createVideoThumb(data);
  });

})(document);
