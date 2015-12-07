

var promise = new Promise(function(resolve[, reject]) {
	var value = doSomething();
	if (thingWorked) {
		resolve(value);
	} else if (somethingWentWrong) {
		reject();
	}
}).then(function(value) {
	// success!
	nextThing(value);
}).catch(rejectFunction);


new Promise(function(resolve, reject) {
	var img = document.createElement('img');
	img.src = 'image.jpg';
	
	img.onload = function() {
		resolve(this.src);
	};

	img.onerror = function() {
		reject(this.src);
	};

	parent.appendChild(img);
})
.then(function(source) {
	console.log(source + " loaded!");
})
.catch(function(source) {
	console.log(source + " failed to load!");
});