$(function(){
	$("#controls-top").click(function(){
		$("#controls-top .control-button.slide").slideToggle(400);
	})
})
/*返回顶部*/
/*$(window).scroll(function(){
	if($(window).scrollTop()>100){
		$(".return-top").fadeIn();
	}else{
		$(".return-top").fadeOut();
	}
	$(".return-top").click(function(){
		$("body").animate({scrollTop:0});
		$(document.documentElement).animate({scrollTop:0});
	})
	
})*/