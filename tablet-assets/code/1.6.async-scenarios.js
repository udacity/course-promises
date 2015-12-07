var worker = new Worker('worker.js');

worker.postMessage(data);
worker.onmessage = doSomething;


data.forEach(function(d) {
  var div = createDiv(d);
  body.appendChild(div);
});

function makeSepia(image) {
	...
};

hugeArrayOfImages.forEach(function(i) {
  makeSepia(i);
});

var data = get('data.json');
data.onload = function() {
	analyze(this.responseText);
};

