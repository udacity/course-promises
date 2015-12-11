
getJSON('../data/earth-like-results.json')
.then(function(response) {
  addSearchHeader(response.query);
  return getJSON(response.results[0]);
})
.catch(function() {
  throw Error('Search Request Error');
})
.then(function(planetData) {
  createPlanetThumb(planetData);
})
.catch(function(e) {
  addSearchHeader('unknown');
  console.log(e);
})

t