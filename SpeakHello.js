(function (window) {  
	var helloSpeaker = {};  
	var speakWord = "Hello";
	helloSpeaker.speak = function() {     
	  console.log(speakWord + " " + helloSpeaker.names);
	}
	window.helloSpeaker = helloSpeaker;
})(window);  
