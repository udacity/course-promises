function loadImage(src, parent, callback) {
	var img = document.createElement('img');
	img.src = src;
	img.onload = callback;
	parent.appendChild(img);
};

loadImage('above-the-fold.jpg', imgContainer, function () {
	loadImage('just-below-the-fold.jpg', imgContainer2, function() {
		loadImage('farther-down.jpg', imgContainer3, function() {
			loadImage('this-is-getting-ridiculous.jpg', imgContainer4, function() {
				loadImage('abstract-art.jpg', imgContainer5, function() {
					loadImage('egyptian-pyramids.jpg', imgContainer6, function() {
						loadImage('last-one.jpg', imgContainer7);
					})
				})
			})
		})
	})
})


