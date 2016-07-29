$(function(){
    $('.header .jia').on('click',function(){
        $('.click').toggleClass('on');
    })
    $('.liste li').eq(0).on('click',function(){
        $('.aa').removeClass('chuxian')
        $('.shouye').addClass('chuxian');
    })
    $('.liste li').eq(1).on('click',function(){
        $('.aa').removeClass('chuxian')
         $('.txl').addClass('chuxian');
    })
    $('.liste li').eq(2).on('click',function(){
        $('.aa').removeClass('chuxian')
        $('.faxian').addClass('chuxian');
    })
    $('.liste li').eq(3).on('click',function(){
        $('.aa').removeClass('chuxian')
        $('.wo').addClass('chuxian');
    })
})