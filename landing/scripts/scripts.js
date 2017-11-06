function init_mobile_select() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.selectpicker').selectpicker('mobile');
    }
}

function accessibility_focus_menu() {
    $('.skip').find('a').on('focus', function () {
        $(this).closest('.skip').addClass('active');
    }).on('blur', function () {
        $(this).closest('.skip').removeClass('active');
    });
}

function accessibility_contrast_colors() {
    $('#contrastBtn').click(function () {
        $('body').toggleClass('contrastColors');
    });
}


$(function () { // document ready shortcut
    init_mobile_select();
    accessibility_focus_menu();
    accessibility_contrast_colors();
});

