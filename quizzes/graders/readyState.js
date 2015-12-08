try {
	ready().then(function() {
		window.dispatchEvent(new CustomEvent('ud-resolved', {'detail': 'passed'}));
	});
} catch (e) {
	// don't need to alert students to errors here
}
