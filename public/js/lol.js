$('.toutiao').on('mouseenter',function(){
    $('.topbar-warpper .subMenu').addClass('active')
}).on('mouseleave',function(){
    $('.topbar-warpper .subMenu').removeClass('active')
})
$('.topbar-warpper .subMenu').on('mouseenter',function(){
    $('.topbar-warpper .subMenu').addClass('active')
}).on('mouseleave',function(){
    $('.topbar-warpper .subMenu').removeClass('active')
})
$('.usename').on('mouseenter',function(){
    $('.usename>.popover').addClass('active')
}).on('mouseleave',function () {
    $('.usename>.popover').removeClass('active')
})
//prome 轮播
$(function(){
    $('.promo>.promo-trigger').on('mouseover','.trigger-item',function (e) {
        let $li = $(e.currentTarget)
        let index = $li.index()
        go(index)
    })
    let current = 0
    setInterval(function(){
        let nextIndex = current + 1
        if(nextIndex === 5){
            nextIndex = 0
        }
        go(nextIndex)
        current = nextIndex
    },5000)
    function go(index){
        $('.promo-item').eq(index).addClass('on').siblings().removeClass('on')
        $('.trigger-item').eq(index).addClass('on').siblings().removeClass('on')
        let width = $('.promo-item').width()
        $('.promo-list').css({
            transform:'translateX('+(-width * (index))+'px)'
        })
    }
})
//主页面


//新闻栏
$(function () {
    $('.news-nav').on('mouseover','li',function(e){
        let $li = $(e.currentTarget)
        let index = $li.index()
        go(index)
    })
    function go(index){
        $('.news-type').eq(index).addClass('current').siblings().removeClass('current')
        $('.news-content').eq(index).addClass('current').siblings().removeClass('current')
    }
})
//英雄推荐栏
$(function(){
    $('.tab-nav').on('mouseover','li',function(e){
        let $li = $(e.currentTarget)
        let index =$li.index()
        go(index)
    })
    function go(index){
        $('.hero-type').eq(index).addClass('current').siblings().removeClass('current')
        $('.hero-content').eq(index).addClass('current').siblings().removeClass('current')
    }
})
//最新推荐栏
$(function(){
    $('.recommend-nav').on('mouseover','li',function(e){
        let $li = $(e.currentTarget)
        let index = $li.index()
        go(index)
    })
    function go(index){
        $('.recommend-type').eq(index).addClass('current').siblings().removeClass('current')
        $('.recommend-content').eq(index).addClass('current').siblings().removeClass('current')
    }
})





$(function(){
    $(document).on('scroll',function () {
        $('.header').addClass('header-close')
        let srcollTop = $(document).scrollTop()
        if(srcollTop>400){
            $('.menu').addClass('fix-menu')
        }else{
            $('.menu').removeClass('fix-menu')
        }
    })
    $('#J_menu > .menu-item').each(function(index){
        $('.home-slide-item').hide().eq(0).show()
        $(this).on('click',function(){
            $('#J_menu > .menu-item').removeClass('current').eq(index).addClass('current')
            $('.home-slide-item').fadeOut().eq(index).fadeIn()
        })
    })


})
