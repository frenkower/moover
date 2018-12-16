$(document).ready(function(){
	var timer = 0;

	$('.greenZone').css("opacity", 1);
	$('.greenZone').css("top", Math.random()*250);
	$('.greenZone').css("left", Math.random()*($('.wrapper').width()));

	if($('.moover').offset().left >= $('.greenZone').offset().left && ($('.moover').offset().left)+$('.moover').width() <= ($('.greenZone').offset().left)+$('.greenZone').width() && $('.moover').offset().top >= $('.greenZone').offset().top && ($('.moover').offset().top)+$('.moover').height() <= ($('.greenZone').offset().top)+$('.greenZone').height()){
		$('.txt').text("in");
	}
	else
		$('.txt').text("");


	$('.wrapper').mousedown(function(e){
		// X = e.clientX;
		// Y = e.clientY;
		// $(".moover").css("left", X-($('.wrapper').offset().left)-($('.moover').width()/2));
		// $(".moover").css("top", Y-($('.wrapper').offset().top)-($('.moover').height()/2));
		$('.wrapper').mousemove(function(e){
			x = e.clientX-($('.wrapper').offset().left);
			y = e.clientY-($('.wrapper').offset().top);

			
			$('.moover').css("top", y-($('.moover').height()/2));
			$('.moover').css("left", x-($('.moover').width()/2)); 


			if($('.moover').offset().left >= $('.greenZone').offset().left && ($('.moover').offset().left)+$('.moover').width() <= ($('.greenZone').offset().left)+$('.greenZone').width() && $('.moover').offset().top >= $('.greenZone').offset().top && ($('.moover').offset().top)+$('.moover').height() <= ($('.greenZone').offset().top)+$('.greenZone').height()){
				$('.txt').text("in");
				
				$('.greenZone').css("top", Math.random()*250);
				$('.greenZone').css("left", Math.random()*($('.wrapper').width()-$('.greenZone').width()));

			}
			else
				$('.txt').text("");

			$(".wrapper").mouseup(function(){
				$(".wrapper").unbind("mousemove");

			});

			$(".wrapper").mouseleave(function(){
				$(".wrapper").unbind("mousemove");
			});
		});
	});
});
