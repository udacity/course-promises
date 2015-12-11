
getJSON('../data/earth-like-results.json')
.then(function(response) {
  response.results.forEach(function(url) {
    getJSON(url).then(createPlanetThumb);
  });
})

