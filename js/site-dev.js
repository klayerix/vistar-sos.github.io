$(document).ready(function(){
    var count_a = 0;
    if (screen.width > 1279) {
        $('.site-creation-item-container.a').click(function(){
            $('.site-creation-item-container.a').addClass('active');
            count_a++;
            if(count_a % 2 != 0){
                $('.site-creation-item-more-btn.a').css({
                    'transform': 'rotate(180deg)',
                    'box-shadow': '0 -2px 4px 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.a').slideToggle('1000');
                $('.site-creation-item-container.d').css('margin-top', '315px');
                $('.site-creation-item-container.a').css('border-radius', '12px 12px 0px 0px');
            } else {
                $('.site-creation-item-more-btn.a').css({
                    'transform': 'rotate(360deg)',
                    'box-shadow': '0 -2px 4px 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.a').slideToggle('1000');
                $('.site-creation-item-container.d').css('margin-top', '50px');
                $('.site-creation-item-container.a').css('border-radius', '12px 12px 0px 0px');
                $('.site-creation-item-container.a').removeClass('active');
            }
            return false;
        });  
        var count_b = 0;
            $('.site-creation-item-container.b').click(function(){
                $('.site-creation-item-container.b').addClass('active');
                count_b++;
                if(count_b % 2 != 0){
                    $('.site-creation-item-more-btn.b').css({
                        'transform': 'rotate(180deg)',
                        'box-shadow': '0 -2px 4px 0 rgba(114, 114, 114, 0.5)'
                    });
                    $('.site-creation-text.b').slideToggle('1000');
                    $('.site-creation-item-container.e').css('margin-top', '315px');
                    $('.site-creation-item-container.b').css('border-radius', '12px 12px 0px 0px');
                } else {
                    $('.site-creation-item-more-btn.b').css({
                        'transform': 'rotate(360deg)',
                        'box-shadow': '0 -2px 4px 0 rgba(114, 114, 114, 0.5)'
                    });
                    $('.site-creation-text.b').slideToggle('1000');
                    $('.site-creation-item-container.e').css('margin-top', '50px');
                    $('.site-creation-item-container.b').css('border-radius', '12px 12px 0px 0px');
                    $('.site-creation-item-container.b').removeClass('active');
                }
                return false;
            });
        var count_c = 0;
        $('.site-creation-item-container.c').click(function(){
            $('.site-creation-item-container.c').addClass('active');
            count_c++;
            if(count_c % 2 != 0){
                $('.site-creation-item-more-btn.c').css({
                    'transform': 'rotate(180deg)',
                    'box-shadow': '0 -2px 4px 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.c').slideToggle('1000');
                $('.site-creation-item-container.dop').css('margin-top', '315px');
                // $('.site-creation-item-container.c').css('border-radius', '12px 12px 0px 0px');
            } else {
                $('.site-creation-item-more-btn.c').css({
                    'transform': 'rotate(360deg)',
                    'box-shadow': '0 -2px 4px 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.c').slideToggle('1000');
                $('.site-creation-item-container.dop').css('margin-top', '50px');
                // $('.site-creation-item-container.c').css('border-radius', '12px 12px 0px 0px');
                $('.site-creation-item-container.c').removeClass('active');
            }
            return false;
        });

        var count_h = 0;
        var count_d = 0;
        $('.site-creation-item-container.d').click(function(){
            $('.site-creation-item-container.d').addClass('active');
            count_d++;        
            if(count_d % 2 != 0){
                count_h++;
                $('.site-creation-item-more-btn.d').css({
                    'transform': 'rotate(180deg)',
                    'box-shadow': '0 -2px 4px 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.d').slideToggle('1000');
                $('.other-services-container').css('margin-top', '315px');
                $('.site-creation-item-container.d').css('border-radius', '12px 12px 0px 0px');
            } else {
                $('.site-creation-item-more-btn.d').css({
                    'transform': 'rotate(360deg)',
                    'box-shadow': '0 -2px 4px 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.d').slideToggle('1000');
                $('.site-creation-item-container.d').css('border-radius', '12px 12px 0px 0px');
                $('.site-creation-item-container.d').removeClass('active');
                count_h--;
                if (count_h == 0) {
                    $('.other-services-container').css('margin-top', '66px');
                }
            }
            return false;
        });

        var count_e = 0;
        $('.site-creation-item-container.e').click(function(){
            $('.site-creation-item-container.e').addClass('active');
            count_e++;        
            if(count_e % 2 != 0){            
                $('.site-creation-item-more-btn.e').css({
                    'transform': 'rotate(180deg)',
                    'box-shadow': '0 -2px 4px 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.e').slideToggle('1000');
                $('.other-services-container').css('margin-top', '315px');
                $('.site-creation-item-container.e').css('border-radius', '12px 12px 0px 0px');
                count_h++;
            } else {
                $('.site-creation-item-more-btn.e').css({
                    'transform': 'rotate(360deg)',
                    'box-shadow': '0 -2px 4px 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.e').slideToggle('1000');
                $('.site-creation-item-container.e').css('border-radius', '12px 12px 0px 0px');
                $('.site-creation-item-container.e').removeClass('active');
                count_h--;
                if (count_h == 0) {
                    $('.other-services-container').css('margin-top', '66px');
                }
            }
            return false;
        });
    }
    else if (screen.width < 479) {
        $('.site-creation-item-container.a').click(function(){
            $('.site-creation-item-container.a').addClass('active');
            count_a++;
            if(count_a % 2 != 0){
                $('.site-creation-text.a').slideToggle('1000');
            } else {
                $('.site-creation-text.a').slideToggle('1000');
                $('.site-creation-item-container.a').removeClass('active');
            }
            return false;
        });  
        var count_b = 0;
            $('.site-creation-item-container.b').click(function(){
                $('.site-creation-item-container.b').addClass('active');
                count_b++;
                if(count_b % 2 != 0){
                    $('.site-creation-text.b').slideToggle('1000');
                } else {
                    $('.site-creation-text.b').slideToggle('1000');
                    $('.site-creation-item-container.b').removeClass('active');
                }
                return false;
            });
        var count_c = 0;
        $('.site-creation-item-container.c').click(function(){
            $('.site-creation-item-container.c').addClass('active');
            count_c++;
            if(count_c % 2 != 0){
                $('.site-creation-text.c').slideToggle('1000');
            } else {
                $('.site-creation-text.c').slideToggle('1000');
                $('.site-creation-item-container.c').removeClass('active');
            }
            return false;
        });

        var count_h = 0;
        var count_d = 0;
        $('.site-creation-item-container.d').click(function(){
            $('.site-creation-item-container.d').addClass('active');
            count_d++;        
            if(count_d % 2 != 0){
                count_h++;
                $('.site-creation-text.d').slideToggle('1000');
                $('.other-services-container').css('margin-top', '315/320 *100vw');
            } else {
                $('.site-creation-text.d').slideToggle('1000');
                $('.site-creation-item-container.d').removeClass('active');
                count_h--;
                if (count_h == 0) {
                    $('.other-services-container').css('margin-top', '66/320 *100vw');
                }
            }
            return false;
        });

        var count_e = 0;
        $('.site-creation-item-container.e').click(function(){
            $('.site-creation-item-container.e').addClass('active');
            count_e++;        
            if(count_e % 2 != 0){            
                $('.site-creation-text.e').slideToggle('1000');
                $('.other-services-container').css('margin-top', '315/320 *100vw');
                count_h++;
            } else {
                $('.site-creation-text.e').slideToggle('1000');
                $('.site-creation-item-container.e').removeClass('active');
                count_h--;
                if (count_h == 0) {
                    $('.other-services-container').css('margin-top', '66/320 *100vw');
                }
            }
            return false;
        });
    }
    else{
        $('.site-creation-item-container.a').click(function(){
            $('.site-creation-item-container.a').addClass('active');
            count_a++;
            if(count_a % 2 != 0){
                $('.site-creation-item-more-btn.a').css({
                    'transform': 'rotate(180deg)',
                    'box-shadow': '0 -0.15vw 0.3125vw 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.a').slideToggle('1000');
                $('.site-creation-item-container.d').css('margin-top', '45.6vw');
                $('.site-creation-item-container.a').css('border-radius', '0.9375vw 0.9375vw 0vw 0vw');
            } else {
                $('.site-creation-item-more-btn.a').css({
                    'transform': 'rotate(360deg)',
                    'box-shadow': '0 -0.15vw 0.3125vw 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.a').slideToggle('1000');
                $('.site-creation-item-container.d').css('margin-top', '3.9vw');
                $('.site-creation-item-container.a').css('border-radius', '0.9375vw 0.9375vw 0vw 0vw');
                $('.site-creation-item-container.a').removeClass('active');
            }
            return false;
        });  
        var count_b = 0;
            $('.site-creation-item-container.b').click(function(){
                $('.site-creation-item-container.b').addClass('active');
                count_b++;
                if(count_b % 2 != 0){
                    $('.site-creation-item-more-btn.b').css({
                        'transform': 'rotate(180deg)',
                        'box-shadow': '0 -0.15vw 0.3125vw 0 rgba(114, 114, 114, 0.5)'
                    });
                    $('.site-creation-text.b').slideToggle('1000');
                    $('.site-creation-item-container.e').css('margin-top', '27.6vw');
                    $('.site-creation-item-container.b').css('border-radius', '0.9375vw 0.9375vw 0vw 0vw');
                } else {
                    $('.site-creation-item-more-btn.b').css({
                        'transform': 'rotate(360deg)',
                        'box-shadow': '0 -0.15vw 0.3125vw 0 rgba(114, 114, 114, 0.5)'
                    });
                    $('.site-creation-text.b').slideToggle('1000');
                    $('.site-creation-item-container.e').css('margin-top', '3.9vw');
                    $('.site-creation-item-container.b').css('border-radius', '0.9375vw 0.9375vw 0vw 0vw');
                    $('.site-creation-item-container.b').removeClass('active');
                }
                return false;
            });
        var count_c = 0;
        $('.site-creation-item-container.c').click(function(){
            $('.site-creation-item-container.c').addClass('active');
            count_c++;
            if(count_c % 2 != 0){
                $('.site-creation-item-more-btn.c').css({
                    'transform': 'rotate(180deg)',
                    'box-shadow': '0 -0.15vw 0.3125vw 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.c').slideToggle('1000');
                $('.site-creation-item-container.dop').css('margin-top', '21.6vw');
                // $('.site-creation-item-container.c').css('border-radius', '0.9375vw 0.9375vw 0vw 0vw');
            } else {
                $('.site-creation-item-more-btn.c').css({
                    'transform': 'rotate(360deg)',
                    'box-shadow': '0 -0.15vw 0.3125vw 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.c').slideToggle('1000');
                $('.site-creation-item-container.dop').css('margin-top', '3.9vw');
                // $('.site-creation-item-container.c').css('border-radius', '0.9375vw 0.9375vw 0vw 0vw');
                $('.site-creation-item-container.c').removeClass('active');
            }
            return false;
        });

        var count_h = 0;
        var count_d = 0;
        $('.site-creation-item-container.d').click(function(){
            $('.site-creation-item-container.d').addClass('active');
            count_d++;        
            if(count_d % 2 != 0){
                $('.site-creation-item-more-btn.d').css({
                    'transform': 'rotate(180deg)',
                    'box-shadow': '0 -0.15vw 0.3125vw 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.d').slideToggle('1000');
                $('.other-services-container').css('margin-top', '36.6vw');
                $('.site-creation-item-container.d').css('border-radius', '0.9375vw 0.9375vw 0vw 0vw');
                count_h++;
            } else {
                $('.site-creation-item-more-btn.d').css({
                    'transform': 'rotate(360deg)',
                    'box-shadow': '0 -0.15vw 0.3125vw 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.d').slideToggle('1000');
                $('.site-creation-item-container.d').css('border-radius', '0.9375vw 0.9375vw 0vw 0vw');
                $('.site-creation-item-container.d').removeClass('active');
                count_h--;
                if (count_h == 0) {
                    $('.other-services-container').css('margin-top', '0vw');
                }
            }
            return false;
        });

        var count_e = 0;
        $('.site-creation-item-container.e').click(function(){
            $('.site-creation-item-container.e').addClass('active');
            count_e++;        
            if(count_e % 2 != 0){            
                $('.site-creation-item-more-btn.e').css({
                    'transform': 'rotate(180deg)',
                    'box-shadow': '0 -0.15vw 0.3125vw 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.e').slideToggle('1000');
                $('.other-services-container').css('margin-top', '36.6vw');
                $('.site-creation-item-container.e').css('border-radius', '0.9375vw 0.9375vw 0vw 0vw');
                count_h++;
            } else {
                $('.site-creation-item-more-btn.e').css({
                    'transform': 'rotate(360deg)',
                    'box-shadow': '0 -0.15vw 0.3125vw 0 rgba(114, 114, 114, 0.5)'
                });
                $('.site-creation-text.e').slideToggle('1000');
                $('.site-creation-item-container.e').css('border-radius', '0.9375vw 0.9375vw 0vw 0vw');
                $('.site-creation-item-container.e').removeClass('active');
                count_h--;
                if (count_h == 0) {
                    $('.other-services-container').css('margin-top', '0vw');
                }
            }
            return false;
        });
    }
});