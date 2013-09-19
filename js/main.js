$(function ()
  {
      var cookieSize = 64;
      var i = 0, j = 1, k = 1;;
      var count = setInterval(fall, 50);
      $('#screen').mousedown(function (event)
			 {
			     var rnd = Math.floor(Math.random()*4);
			     $('#cookie').append('<img src = "img/cookie'+rnd+'.png" class="cookie'+i+'"/>');
			     $('.cookie'+i).css('top', event.offsetY);
			     $('.cookie'+i).css('left', event.offsetX);
			     i+=1;
			 }
			);
      function fall()
      {
	  $('img').each(function (){
	      var rndX = Math.floor(Math.random()*16) - Math.floor(Math.random()*16), rndY = Math.floor(Math.random()*16) - Math.floor(Math.random()*16);
	      var elem = $(this);
	      var position = elem.offset();
	      if (position.top > 0 && position.left > 0 && position.top < 1000-cookieSize && position.left < 1000-cookieSize) {
		  elem.css('top', position.top + rndY);
		  elem.css('left', position.left + rndX);
	      }
	  });
      }
  });
