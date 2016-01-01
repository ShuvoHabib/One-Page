
$( document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('#nav-stick').addClass('stuck');
            $('.navbar-brand').removeClass('logo-padding');
            $('ul.nav li').addClass('zero-padding');
        } else {
            $('#nav-stick').removeClass('stuck');
            $('.navbar-brand').addClass('logo-padding');
            $('ul.nav li').removeClass('zero-padding');
        }
    });
});