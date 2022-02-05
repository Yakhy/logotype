$(function(){

  $('.header-bottom').slick({
    prevArrow: '<img class="header-prev header-arrows" src="images/new-prev.png">',
    nextArrow: '<img class="header-next header-arrows" src="images/new-next.png">',
  });

  $('.news-top').slick({
    prevArrow: '<img class="news-arrows news-prev" src="images/new-prev.png">',
    nextArrow: '<img class="news-arrows news-next" src="images/new-next.png">',
  });
    
  $('.menu-btn').click(function(){
    $('.header-menu').toggleClass('header-menu_active');
    $('.menu-btn__line').toggleClass('menu_btn__line_active');
    $(this).toggleClass('menu-btn_active');
});
})



