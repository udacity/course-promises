var settledPromise = Promise.resolve('done!');

settledPromise.then( ... );  // works!

new Promise(function(resolve, reject) {
	resolve('hi');	// works
	resolve('bye');	// can't happen a second time
})

settledPromise.then( function(e){console.log(e)} );  // works!


event handler

promise code that listens to an event and only fires once