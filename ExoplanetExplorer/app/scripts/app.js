;var loader = (function(document) {
  'use strict';

  var home = null;
  var planetInfos = [];

  function addSearchHeader(string) {
    home.innerHTML = '<h2 class="page-title">query: ' + string + '</h2>';
  };

  function createPlanetThumb(data) {
    planetInfos.push({name: data.pl_name, data: data});
    var pM = document.createElement('paper-material');
    pM.elevation = '1';
    var pT = document.createElement('planet-thumb');
    for (let d in data) {
      pT[d] = data[d];
    }
    pT.planetInfo = data;
    pM.appendChild(pT);
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

  function getJSON(url) {
    return get(url).then(JSON.parse);
  };

  function loadSequence() {
    home = document.querySelector('section[data-route="home"]');
    return getJSON('/data/earth-like-results.json')
      .then(function(d) {
        addSearchHeader(d.query);
        return d.results;
      })
      .then(function(urls) {
        urls.reduce(function (sequence, planetURL) {
          return sequence.then(function () {
            return getJSON(planetURL);
          })
          .then(function(planetData) {
            createPlanetThumb(planetData)
          });
        }, Promise.resolve())
      })
      .then(function() {
        return planetInfos;
      })
  };

  window.addEventListener('WebComponentsReady', function() {
    // loadSequence()
  });
  return {
    get: get,
    getJSON: getJSON,
    loadSequence: loadSequence
  }
})(document);
