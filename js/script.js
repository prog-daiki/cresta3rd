$(function(){

var imgHeight = $('.main-copy').outerHeight();
var bgHeight = $('.fv').outerHeight();

// ハンバーガーメニュー
$('.burger-btn').on('click', function(){
    if($(window).scrollTop() < bgHeight -50){
        $('.burger-btn').toggleClass('close');
        $('.header-nav').toggleClass('open');
        $('.burger-musk').fadeToggle(300);
        $('body').toggleClass('noscroll');
    } else {
        $(this).toggleClass('black');
        $('.burger-btn').toggleClass('close');
        $('.header-nav').toggleClass('open');
        $('.burger-musk').fadeToggle(300);
        $('body').toggleClass('noscroll');
    }
});

$('.header-nav-item > a').on('click',function(){
    $('.header-nav').toggleClass('open');
    $('.burger-btn').removeClass('close');
    $('body').removeClass('noscroll');
});

// スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
$(window).on('load scroll', function(){
    if($(window).scrollTop() < imgHeight -50){
        //メインビジュアル内にいるので、クラスを外す。
        $('.header-logo').removeClass('black');
    } else{
        $('.header-logo').addClass('black');
    }

    if($(window).scrollTop() < bgHeight -50){
        //メインビジュアル内にいるので、クラスを外す。
        $('.burger-btn').removeClass('black');
    } else{
        $('.burger-btn').addClass('black');
    }

});

});
