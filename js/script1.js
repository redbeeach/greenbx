$(document).ready(function () {
	    $('.posts_list').bxSlider({
	        minSlides: 1,
	        maxSlides: 3,
	        moveSlides: 1,
	        slideWidth: 370,
	        slideMargin: 30,
	        pager: false,
	        nextSelector: '.recent_posts .controls .next',
	        prevSelector: '.recent_posts .controls .prev'
	    });
//모바일토글
	    $(".toggle").click(function () {
	        $(".main-menu").slideToggle();
	    });
//사이즈변경시메뉴
	    $(window).resize(function () {
	        if ($(window).width() > 768) {
	            //참이면 할일
	            $(".main-menu").show();
	        } else {
	            //거짓이면 할일
	            $(".main-menu").hide();
	        }
	    });
        
//상단 고정 메뉴 스크롤 내릴때 고정

        var $header = $('header');
        $(window).scroll(function(){
            if($(this).scrollTop() > 0){
               $header.addClass('sticky');
               }else{
               $header.removeClass('sticky');
               }
        });

	});
//$(function(){
//    $("#header").load("header.html"); 
//    $("#footer").load("footer.html");
//});
