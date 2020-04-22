$(window).ready(function(){
    $('.completed-projects-slider-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 5000, // убрать автоплей? (?)
        infinite: true,
        adaptiveHeight: true,
        adaptiveWidth: true,
        dots: false,
        variableWidth: true,
        centerMode: true
        // fade: true,
        // cssEase: 'linear'
      });
});