$(document).ready(function(){
	function resizeGallery(){
		if ($(".full__slider").length) {
			let fullWidth = 0;
			let fullHeight = 0;
			$('.full__slider .elem__full').each(function(index,elem){
				$(elem).css('width' ,$(window).width());
				$(elem).css('height' ,$(window).height());
				fullWidth+= $(window).width();
				fullHeight+= $(window).width();
			});
			$('.full__slider').css("height" , fullHeight - $(window).width());
			$('.full__slider .grid__full').css("width" , fullWidth);
		}
	}
	resizeGallery();
	$(window).on("resize" ,function(){
		resizeGallery();
	});

	let allow = true;
	var lastScrollTop = 0;
	var horizontalScroll = 0;
	var start = $(".full__slider").offset().top;
	var end = $('.full__slider').height() +  $('.full__slider').offset().top;
	var heightNew = $('.full__slider').height();
	let timer;
	$(window).on("resize" ,function(){
		allow = true;
		lastScrollTop = 0;
		horizontalScroll = 0;
		start = $(".full__slider").offset().top;
		end = $('.full__slider').height() +  $('.full__slider').offset().top;
		heightNew = $(".full__slider").height();
	});
	$(window).on("scroll" ,function(){
		if ($(window).scrollTop() >= $('.full__slider').offset().top) {
			var st = $(this).scrollTop();
			   if (st > lastScrollTop){
			   	// down scroll
			   	let diapasone = $(window).scrollTop() - start;
			   	let percent = (diapasone)/(end - start - $(window).height()) ;
			   	let newpercent = (end - start)*percent;
			   	if (newpercent > heightNew) {
			   		newpercent = heightNew;
			   		$(".full__slider .grid__full").css("position" , "static");
			   		$('header').css("background-color" ,"#F0C71E");
			   	} else{
			   		$(".full__slider .grid__full").css("position" , "fixed");
			   		$('header').css("background-color" ,"rgba(255,255,255,0)");
			   	}
			   	$('.grid__full').css("transform" , "translateX(-"+ newpercent +"px)");
			   	if (timer) {
			   		clearTimeout(timer);
			   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(12deg)");
			   		$('.element__info').css('transform' , "skew(6deg)");
			   		timer = setTimeout(function(){
				   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(0deg)");
			   		$('.element__info').css('transform' , "skew(0deg");
			   		} , 200);
			   	} else {
			   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(12deg)");
			   		$('.element__info').css('transform' , "skew(6deg)");

			   		timer = setTimeout(function(){
				   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(0deg)");
			   		$('.element__info').css('transform' , "skew(0deg)");
			   		} , 200);
			   	}
			   } else {
			   		let diapasone = $(window).scrollTop() - start;
				   	let percent = (diapasone)/(end - start - $(window).height()) ;
				   	let newpercent = (end - start)*percent;
				   if (newpercent > heightNew) {
				   		newpercent = heightNew;
				   		$(".full__slider .grid__full").css("position" , "static");
				   		$('header').css("background-color" ,"#F0C71E");
				   	} else{
				   		$(".full__slider .grid__full").css("position" , "fixed");
				   		$('header').css("background-color" ,"rgba(255,255,255,0)");
				   	}
				   	$('.grid__full').css("transform" , "translateX(-"+ newpercent +"px)")
				      // upscroll code
					    if (timer) {
				   		clearTimeout(timer);
				   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(-12deg)");
					   		$('.element__info').css('transform' , "skew(-6deg)");
				   		timer = setTimeout(function(){
					   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(0deg)");
					   		$('.element__info').css('transform' , "skew(0deg)");
				   		} , 200);
				   	} else {
				   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(-12deg)");
				   		$('.element__info').css('transform' , "skew(-6deg)");
				   		timer = setTimeout(function(){
					   		$('.grid__full>img').css('transform' ,"translateY(-50%) skew(0deg)");
					   		$('.element__info').css('transform' , "skew(0deg)");
				   		} , 200);
				   	}
			   }
			   lastScrollTop = st;
		}
	});
});