$('#showBtn').on('click', function () {
    $('.menu').removeClass('hide').addClass('show');
    shadowMenu();
});
$('#closeBtn').on('click', function () {
    $('.menu').removeClass('show').addClass('hide');
    shadowMenu();
});

$('.more').on('click', function () {
    $('.menu').removeClass('hide').addClass('show');
    shadowMenu();
});

$(window).resize(shadowMenu);

//当菜单弹出的时候，不要让body出现滚动条。当菜单消失的时候再让body出现滚动条
function shadowMenu() {
    //只有当屏幕尺寸小于992，以及menu菜单是显示的状态，这时才要干掉body的滚动条
    if ($(window).innerWidth() <= 992 && $('.menu').hasClass('show')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    }
}

$('.btn-left').on('click', function () {
    moveImg('to left');
});
$('.btn-right').on('click', function () {
    moveImg('to right');
});

function moveImg(str) {
    if (str == 'to right') {
        if ($(window).innerWidth() <= 576) {
            $('.scroll').css(
                'transform', 'translateX(-500px)'
            ).css(
                'transition', '1s'
            );
        } else if ($(window).innerWidth() >= 576) {
            $('.scroll').css(
                'transform', 'translateX(-400px)'
            ).css(
                'transition', '1s'
            );
        }
        $('.btn-left').css('opacity', '1');
        $('.btn-right').css('opacity', '0');
    } else if (str == 'to left') {
        $('.scroll').css(
            'transform', 'translateX(0)'
        ).css(
            'transition', '1s'
        );
        $('.btn-left').css('opacity', '0');
        $('.btn-right').css('opacity', '1');
    }
}