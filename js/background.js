chrome.app.runtime.onLaunched.addListener(function() {
	var win = chrome.app.window.create('main.html', {
		width: 400,
		height: 400
	});
	win.moveTo(0, 0);
});