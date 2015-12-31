
$( document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('#nav-stick').addClass('stuck');
            $('.navbar-default').addClass('zero-padding');

        } else {
            $('#nav-stick').removeClass('stuck');
            $('.navbar-default').removeClass('zero-padding');
        }
    });
});