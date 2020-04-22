// window.onload = function() {
//     $(window).scroll(function(){
//         var target = $('.mobile-terms-title');
//         var targetPos = target.offset();
//         var winHeight = $(window).height();
//         var winScrollTop = $(window).scrollTop();
//         if(winScrollTop > targetPos.top - winHeight/2){
//             $('.percentage-range-slider-circle.six').css({
//                 'margin-top': '8.5px'
//             });
//             $('.percentage-range-slider.five').css({
//                 'height': '89px',
//                 'transition':' all 2s ease'
//             });  
//             $('.percentage-range-slider-circle.five').css({
//                 'margin-top': '44.5px'
//             });
//             $('.percentage-range-slider.four').css({
//                 'height': '115px',
//                 'transition':' all 2s ease'
//             })  
//             $('.percentage-range-slider-circle.four').css({
//                 'margin-top': '57.5px',
//             })  
//             $('.percentage-range-slider.three').css({
//                 'height': '87px',
//                 'transition':' all 2s ease'
//             })  
//             $('.percentage-range-slider-circle.three').css({
//                 'margin-top': '43.5px',
//             })  
//             $('.percentage-range-slider.two').css({
//                 'height': '66px',
//                 'transition':' all 2s ease'
//             })  
//             $('.percentage-range-slider-circle.two').css({
//                 'margin-top': '33px',
//             }) 
//             $('.percentage-range-slider.one').css({
//                 'height': '71px',
//                 'transition':' all 2s ease'
//             })  
//             $('.percentage-range-slider-circle.one').css({
//                 'margin-top': '35.5px',
//             })           
//         } 
//     });
// }

window.onload = function() {
    $(window).scroll(function(){
        var target = $('.mobile-terms-title');
        var targetPos = target.offset();
        var winHeight = $(window).height();
        var winScrollTop = $(window).scrollTop();
        if(winScrollTop > targetPos.top - winHeight/2){
            $('.percentage-range-slider-container').addClass('open');
        } 
    });
}

