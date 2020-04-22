var target_current_vacancy;
var a_previous = [0,0,0,0,0,0];
function setActiveDescription(a){

     

    $('.current-vacancy-description-container.item'+a).slideToggle('1000');
    $('.current-vacancy-description-container.item'+a).addClass('active');   

    if (a_previous[a-1] == 0) {
        target_current_vacancy = $('.current-vacancy-description-container.item'+a);
        $('html, body').animate({
            scrollTop:  target_current_vacancy.offset().top - 175
        }, 1000);

        $('.current-vacancy-arrow.item'+a).css({
            'transition':'all 0.5s ease',
            'transform': 'rotate(180deg)'
        })
    } else {
        $('.current-vacancy-arrow.item'+a).css({
            'transition':'all 0.5s ease',
            'transform': 'rotate(0deg)'
        })
    }

    a_previous[a-1] = (a_previous[a-1]+1)%2 ;
}

var target_contact;
function scrollHowToContact(){
    target_contact = $('.how-to-contact-title');
    $('html, body').animate({
        scrollTop:  target_contact.offset().top - 175
    }, 1000);
}
