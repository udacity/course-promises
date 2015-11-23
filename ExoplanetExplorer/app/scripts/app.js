(function(document) {
  'use strict';

  var home = null;

  function csvToJSON(csv) {
    return Papa.parse(csv, {header: true});
  };

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

  function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        }
        else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function() {
        reject(Error("Network Error"));
      };

      // Make the request
      req.send();
    });
  }

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    home = document.querySelector('section[data-route="home"]');
    get('http://udacity.github.io/course-promises/promises.json').then(function(d) {
      console.log(d);
      home.innerHTML = d;
    });
  });

})(document);
