get('example.json')
.then(resolveFunc)
.catch(rejectFunc);

get('example.json')
.then(resolveFunc)
.then(undefined, rejectFunc);

get('example.json').then(resolveFunc, rejectFunc);



get('example.json')
.then(function(data) {
	updateView(data);
	return get(data.anotherUrl);
})
.catch(function(error) {
	console.log(error);
	return recoverFromError();
})
.then(doSomethingAsync)
.then(function(data) {
	return doSomethingElseAsync(data.property);
}, function(error) {
	console.log(error);
	tellUserSomethingWentWrong();
});

function async() {
	return new Promise(function(resolve) {
		setTimeout(function() {
			console.log('doing async work');
			resolve({urls: [1,2,3,4,5]});
		},0);
	});
};

function recovery() {
	return new Promise(function(resolve) {
		setTimeout(function() {
			console.log('recovering');
			resolve({urls: [1,2,3,4,5]});
		},0);
	});
};
function ahhhIGiveUp() {
	return new Promise(function(resolve) {
		setTimeout(function() {
			console.log('I give up');
			resolve({urls: [1,2,3,4,5]});
		},0);
	});
};

var urls = [];
async('example.json')
.then(function(data) {
	urls = data.urls;
	return async(urls[0]);
})
.then(undefined, function(e) {
	console.log(1);
	console.log(e);
	return recovery();
})
.catch(function(e) {
	console.log(2);
	console.log(e);
	return recovery();
})
.then(function() {
	console.log(3);
	return async(urls[1]);
})
.then(async, function(e) {
	console.log(e);
	console.log(4);
	ahhhIGiveUp();
});