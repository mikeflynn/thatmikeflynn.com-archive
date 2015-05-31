playAudio = function(file){
	var a = document.createElement('audio');
	if(!!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''))) {
  		var sound = new Audio(file);
  		sound.play();
	}
};

var egg = new Egg();

egg.addCode("up,up,down,down,left,right,left,right,b,a", function() {
    var life = jQuery('<img src="/public/images/1up.png"><img>');
    life.appendTo('body').css({position: "fixed", top: "200px", right: "100px", "z-index": 99999999});
    life.animate({top: '50px', opacity: 0}, {
      duration: 1000,
      complete: function(){
        jQuery(this).remove();
      }
    });
    playAudio('/public/audio/1up.wav');
});

egg.listen();