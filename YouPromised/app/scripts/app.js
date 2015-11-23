/*
Your code goes in here! Keep it constrained to the IIFE below.
 */

(function(document) {
  'use strict';

  var home = null;

  /**
   * Call this function to create new thumbnails
   * @param  {Object} videoData Information about the video. Should contain at least:
   *                            * imageURL
   *                            * title
   *                            * artist
   *                            * shortDescription
   */
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
        } else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function() {
        reject(Error('Network Error'));
      };

      // Make the request
      req.send();
    });
  }

  function getJSON(url) {
    return get(url).then(JSON.parse);
  }

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // We need the home section to append new video thumbnail elements
    home = document.querySelector('section[data-route="home"]');

    /*
    Now you're ready to rock. Feel free to define functions anywhere in the IFFE,
    but you should START your work here.
     */
    getJSON('https://udacity.github.io/course-promises/promises.json').then(function (response) {
      response.videos.forEach(function (video) {
        createVideoThumb(video);
      });
    })
  });

})(document);
