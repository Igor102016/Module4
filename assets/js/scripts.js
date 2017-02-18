$(document).ready(function() {

    $('.my_slider').slick({
        arrows: true,
        dots: false,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false
      }
    }]

    });


    var grid = $(".isotope-grid").isotope({

    });


    $(document).on("click",".navbar-nav li a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });







    $(document).on('click', '.btn', function(e) {
        e.preventDefault();
        $(this).addClass('fadeOutRight');
    });

    $(document).on('click', '.navbar-nav li a', function(e) {
        e.preventDefault();
        $(this).addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated tada');
        });
    ;
    });




});





    var top_show = 150;
    var delay = 1000;
    var show = true;

 $(document).scroll(function(){

    if(!show) return false;




    if ($(this).scrollTop() > top_show) {
            $('.to-the-top').fadeIn();
        } else {
            $('.to-the-top').fadeOut();
        }

});
