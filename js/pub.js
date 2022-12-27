$(function() {
    /* 헤더 웹접근성 */
    $('.sublinb__link').each(function() {
        var liSize = $(this).parents('.sublnb').find('li').length;
        var parentLi = $(this).parent();
        var liIndex = parentLi.index() + 1;
        
        $(this).focus(function() {
           $('.sublnb').removeClass('open');
           $(this).parents('.sublnb').addClass('open');
        });
        if (liIndex == liSize) {
           $(this).blur(function() {
              $(this).parents('.sublnb').removeClass('open');
           });
        }
     });
     $('.header_inner nav > ul > li:first-child > a').keydown(function(e) {
        if(e.keyCode == 9) {
           if(e.shiftKey) {
              $('.sublnb').removeClass('open');
           }
        }
     });

     var windowWidth = $(window).width();
     $('.header_inner nav > ul > li > a').click(function() {
        if(windowWidth < 768) {
           if($(this).find('img').hasClass('slide')) {
              $('.header_inner nav > ul > li > a > img').removeClass('slide');
              $('.sublnb').stop().slideUp();
           } else {
              $('.header_inner nav > ul > li > a > img').removeClass('slide');
              $('.sublnb').stop().slideUp();
              $(this).find('img').addClass('slide');
              $(this).next().stop().slideDown();
           }
        }
     });

     $('#menuBtn').click(function() {
        $('.header_inner nav').stop().animate({'right': 0});
     });
     $('#menuClose').click(function() {
        $('.header_inner nav').stop().animate({'right': '-100%'});
     });
})