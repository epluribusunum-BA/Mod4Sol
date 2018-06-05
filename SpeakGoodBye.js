(function (window) {  
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	byeSpeaker.speak = function () {
	  console.log(speakWord + " " + byeSpeaker.names);
	}
	window.byeSpeaker = byeSpeaker;
})(window);