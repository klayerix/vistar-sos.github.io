var scrollNumber;
    if (screen.width < 480) {
        scrollNumber = 1;
    } else {
        scrollNumber = 1;
    }

$(window).scroll(function(){

    if($(this).scrollTop() > scrollNumber){ // когда скролл ниже начала страницы
        if(screen.width > 500) { // для браузера
            $('.header-cont').removeClass("mobile-fix");
            $('.devtypes-cont').removeClass("mobile-fix");

            $('.header-cont').addClass("fix");
            $('.devtypes-cont').addClass("fix");
        } else 
        if(screen.width < 500) { // для мобилок
            $('.header-cont').removeClass("fix");
            $('.devtypes-cont').removeClass("fix");

            $('.header-cont').addClass("mobile-fix");
            $('.devtypes-cont').addClass("mobile-fix");
        }

        //меняет цвет при наведении на кнопку заказать звонок
        // $(".header_reqcall").on({
        //     mouseenter: function () {
        //         $('.header_reqcall').css('color', '#FFDD7D');
        //     },
        //     mouseleave: function () {
        //         $('.header_reqcall').css('color', '#CEC1FF');
        //     }
        // });
    }

    else { // когда скролл вверху
        if(screen.width > 500) { // для браузера
            $('.header-cont').removeClass("fix");
            $('.devtypes-cont').removeClass("fix");
        } else
        if(screen.width < 500) { // для мобилок
            $('.header-cont').removeClass("mobile-fix");
            $('.devtypes-cont').removeClass("mobile-fix");

        }
    }

    // скрывает и показывает кнопку прокрутки наверх
    if($(this).scrollTop() > 550){
        $('.up-button').css('transform', 'scale(1)');
    } else {
        $('.up-button').css('transform', 'scale(0)');
    }

});

var t;
function scrollUp() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('scrollUp()',20);
  } else clearTimeout(t);
  return false;
}
function setActiveCoop(a){
    if(a == 1){
        $('.cooperation-option-choice.first').addClass('active');
        $('.cooperation-option-choice.second').removeClass('active');
        $('.cooperation-option-choice.third').removeClass('active');
        $('.cooperation-option-choice-circle1').css('visibility', 'visible');
        $('.cooperation-option-choice-circle2').css('visibility', 'hidden');
        $('.cooperation-option-choice-circle3').css('visibility', 'hidden');
    }
    if(a == 2){
        $('.cooperation-option-choice.second').addClass('active');
        $('.cooperation-option-choice.first').removeClass('active');
        $('.cooperation-option-choice.third').removeClass('active');
        $('.cooperation-option-choice-circle1').css('visibility', 'hidden');
        $('.cooperation-option-choice-circle2').css('visibility', 'visible');
        $('.cooperation-option-choice-circle3').css('visibility', 'hidden');
    }
    if(a == 3){
        $('.cooperation-option-choice.third').addClass('active');
        $('.cooperation-option-choice.first').removeClass('active');
        $('.cooperation-option-choice.second').removeClass('active');
        $('.cooperation-option-choice-circle1').css('visibility', 'hidden');
        $('.cooperation-option-choice-circle2').css('visibility', 'hidden');
        $('.cooperation-option-choice-circle3').css('visibility', 'visible');
    }
}
function check() {
    var inp = document.getElementsByName('toggle');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            if(inp[i].value == 'on'){
                $('.checkbox-word-yes').css('color', '#1b1045');
                $('.checkbox-word-no').css('color', '#939393');
                setTimeout(function(){
                    $('.toggle-bg').css('background-image', 'linear-gradient(114deg, #3023ae, #c86dd7)');
                }, 140);
                $('.software-orper-tech-task-rectangle.second').css({
                    'background-image': 'linear-gradient(117deg, #3023ae, #c86dd7)',
                    'box-shadow': '0 2px 3px 0 rgba(82, 82, 82, 0.4)',
                    'color': '#fff'
                });

                $('.software-orper-tech-task-rectangle.first').css({
                    'background-image': 'linear-gradient(117deg, #fff, #fff)',
                    'color': '#1b1045'
                });
            } else {
                $('.checkbox-word-yes').css('color', '#939393'); 
                $('.checkbox-word-no').css('color', '#1b1045');
                $('.toggle-bg').css('background-image', 'linear-gradient(114deg, #cecece, #cecece)');
                $('.software-orper-tech-task-rectangle.first').css({
                    'background-image': 'linear-gradient(117deg, #3023ae, #c86dd7)',
                    'box-shadow': '0 2px 3px 0 rgba(82, 82, 82, 0.4)',
                    'color': '#fff'
                });
                $('.software-orper-tech-task-rectangle.second').css({
                    'background-image': 'linear-gradient(117deg, #fff, #fff)',
                    'color': '#1b1045'
                });
            }
        }
    }
}

function checkFirst(){
    $('#checkbox-off').prop('checked', true);
    $('.checkbox-word-yes').css('color', '#939393'); 
    $('.checkbox-word-no').css('color', '#1b1045');
    $('.toggle-bg').css('background-image', 'linear-gradient(114deg, #cecece, #cecece)');
    $('.software-orper-tech-task-rectangle.first').css({
        'background-image': 'linear-gradient(117deg, #3023ae, #c86dd7)',
        'box-shadow': '0 2px 3px 0 rgba(82, 82, 82, 0.4)',
        'color': '#fff'
    });

    $('.software-orper-tech-task-rectangle.second').css({
        'background-image': 'linear-gradient(117deg, #fff, #fff)',
        'color': '#1b1045'
    });
}

function checkSecond(){
    $('#checkbox-on').prop('checked', true);
    $('.checkbox-word-yes').css('color', '#1b1045');
    $('.checkbox-word-no').css('color', '#939393');
    setTimeout(function(){
        $('.toggle-bg').css('background-image', 'linear-gradient(114deg, #3023ae, #c86dd7)');
    }, 140);
    $('.software-orper-tech-task-rectangle.second').css({
        'background-image': 'linear-gradient(117deg, #3023ae, #c86dd7)',
        'box-shadow': '0 2px 3px 0 rgba(82, 82, 82, 0.4)',
        'color': '#fff'
    });

    $('.software-orper-tech-task-rectangle.first').css({
        'background-image': 'linear-gradient(117deg, #fff, #fff)',
        'color': '#1b1045'
    });
}



function checkmark (){
    if($('#checkmark-active').prop('checked')) {
        [...$('.modal-window-req-call-btn')].forEach((element) => {
            $(element).css('background', 'linear-gradient(103deg, #3023ae, #c86dd7)');
          });
      } else {
        [...$('.modal-window-req-call-btn')].forEach((element) => {
            $(element).css('background', '#c2c2c2');
        });
      }
      
}

function checkmarkOrder (){
    if($('#checkmark-order-active').prop('checked')) {
        [...$('.modal-window-order-button')].forEach((element) => {
            $(element).css('background', 'linear-gradient(103deg, #3023ae, #c86dd7)');
          });
      } else {
        [...$('.modal-window-order-button')].forEach((element) => {
            $(element).css('background', '#c2c2c2');
        });
      }
      
}

function checkmarkFeedback (){
    if($('#checkmark-feedback-active').prop('checked')) {
        [...$('.feedback-form-button')].forEach((element) => {
            $(element).css('background', 'linear-gradient(103deg, #3023ae, #c86dd7)');
          });
      } else {
        [...$('.feedback-form-button')].forEach((element) => {
            $(element).css('background', '#c2c2c2');
        });
      }
      
}

function showModalReqCall(){
    $('.modal-req-call').css('transform', 'scale(1)');
}

function exitModalReqCall(){
    $('.modal-req-call').css('transform', 'scale(0)');
}

function onPhoneChange(event) {
    if ((event.target.value.split(/[0-9]/), event.target.value.split(/[0-9]/).length - 1) == 11) {
        $('.modal-window-req-call-btn').addClass('active');
        $('.modal-window-req-call-btn.active').click(function(){
                var req_call_info = {
                    title: 'Заказ звонка',
                    phone: event.target.value
                }
                $.ajax({
                    type: 'POST',
                    url: '/call',
                    data: req_call_info,
                    error: function(){
                        console.log('error sending');
                    },
                    success: function(){
                        console.log('success');
                        $('.modal-window-req-call-success').css('z-index','0');
                        $('.modal-window-req-call-success').css('opacity','1');
                    }
                });
                localStorage.setItem('lastclear', time_now);
        })
    } else {
        $('.modal-window-req-call-btn.active').off();
        $('.modal-window-req-call-btn.active').removeClass('active');
    }   
}
var time_last, time_now;

function showModalReqCall(main){
    var isMobile = (navigator.userAgent.indexOf('Mobile') !== -1 || screen.width < 480)? isMobile = true: isMobile = false;
    (main == undefined) ? main = false : main = true;
    if (main || isMobile) {
        $('.wrap-modal-req-call').addClass('open');
        $('.modal-req-call').css('transform', 'scale(0.8) translate(-62.5%, -62.5%)');
    } else {
        $('.modal-req-call').css('transform', 'scale(1)');
    }
    $('.modal-window-reqcall-input').mask("+7 (999) 999 99 99", {autoclear: false});
    time_last = localStorage.getItem('lastclear');
    if (time_last == null) { 
        time_last = 0 
    }     
    time_now  = (new Date()).getTime();
    if ((time_now - time_last) > 1000 * 60 * 60 * 24) {
        $('.modal-window-req-call-success').off();
        document.querySelector('.modal-window-reqcall-input').onkeyup = onPhoneChange;
    } else {
        $('.modal-window-req-call-success').css('z-index','0');
        $('.modal-window-req-call-success').css('opacity','1');
    }
}


function exitModalReqCall(){
    var isMobile = (navigator.userAgent.indexOf('Mobile') !== -1 || screen.width < 480)? isMobile = true: isMobile = false;
    if (isMobile) {
        $('.modal-req-call').css('transform', 'scale(0) translate(-50%, -50%)');
    } else {
        $('.modal-req-call').css('transform', 'scale(0)');
    }
    setTimeout(function() {
        $('.wrap-modal-req-call').removeClass('open');
    }, 400);
}
    
var inputFiles = [],
    file,
    fln;
function setFile(e) {
    var files = e.target.files;
    for (var i = 0, ln = files.length; i < ln; i++){
        if (inputFiles.length == 3){
            alert('Лимит файлов');
        } else {
            file = files[i];
            inputFiles.push(file);
            console.log(inputFiles);
            fln = inputFiles.length - 1; // TODO: не передавать fln в onclick = "removeFile('+ fln +')" и не принимать a в removeFile(a);
            if(inputFiles[fln].name.length <= 5){  // FIXME: контейнер прикрепления файла
                $('.feedback-form-clip-file-icon-cont').append('\
                    <div class = "feedback-form-file-container">\
                    <div class="feedback-form-clip-file-icon-delete"><img src="img/delete-file.png" class="delete-file-icon" onclick = removeFile()></div>\
                    <div class="feedback-form-clip-file-icon"><img src="img/added-file-small.png" style="margin: auto"></div>\
                    <div class="feedback-form-clip-file-name">'+ inputFiles[fln].name +'</div>\
                    </div>\
            ');
            } else {
                $('.feedback-form-clip-file-icon-cont').append('\
                    <div class = "feedback-form-file-container">\
                    <div class="feedback-form-clip-file-icon-delete"><img src="img/delete-file.png" class="delete-file-icon" onclick = removeFile()></div>\
                    <div class="feedback-form-clip-file-icon"><img src="img/added-file-small.png" style="margin: auto"></div>\
                    <div class="feedback-form-clip-file-name">'+ inputFiles[fln].name.substr(0,5) + '...' +'</div>\
                    </div>\
            ');
            }
        }
    }
}

function removeFile(a){
    inputFiles.splice(inputFiles.indexOf(a));
    inputFiles = [];
    console.log(inputFiles);
    $('.feedback-form-file-container').remove();
}


function sendFeedback(){
    if($('#checkmark-feedback-active').prop('checked')){
    var data = {
        title: 'Обратная связь',
        name: document.getElementById('feedback-name').value,
        email: document.getElementById('feedback-email').value,
        msg: document.getElementById('feedback-msg').value
    }
    console.log(data);
    $.ajax({
        type: 'POST',
        url: '/feedback',
        crossOrigin: true,
        data: data,
        error: function(){
            console.log('error feedback send');
        },
        success: function(data){
            console.log(data);
        }
    });
} else {
    alert("wrong!");
    }
}

function sendOrder(){
    if($('#checkmark-order-active').prop('checked')){
    var req_call_info = {
        title: 'Обсудить проект',
        name: document.getElementById('order-name').value,
        email: document.getElementById('order-email').value,
        msg: document.getElementById('order-msg').value
    }
    $.ajax({
        type: 'POST',
        url: '/call',
        crossOrigin: true,
        data: req_call_info,
        error: function(){
            console.log('error call request');
        },
        success: function(data){
            console.log(data);
        }
    });
} else {
    alert("wrong!");
    }
}

function validateCall(form){
    var patternEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    var elems = form.elements;

    if($('#checkmark-order-active').prop('checked')){
    
      if (elems.modal-nm.value.replace(/\s+/g, '').length) {
        alert ("vse good");
      } else {
        alert ("enter name plez");
        return false;
      }

      if ((elems.modal-ph.value) != '') {
        if(patternEmail.test((elems.modal-ph.value).val())){ //!!//
            alert ("vse good");
        } else {
            alert ("enter name plez");
            return false;
        }

      } else {
          alert ("enter email plez");
          return false;
      }
    } else {
        alert("postavte galochku plez");
        }
}

function validateOrder(){

}

function validateFeedback(){

}

function onPhonesChange(event) {
    
    if ((event.target.value.split(/[0-9]/), event.target.value.split(/[0-9]/).length - 1) == 11) {
        $('.modal-window-order-button').addClass('active');
        $('.modal-window-order-button.active').click(function(){
                var req_call_info = {
                    title: 'Заказ звонка',
                    phone: event.target.value
                }
                $.ajax({
                    type: 'POST',
                    url: '/call',
                    data: req_call_info,
                    error: function(){
                        console.log('error sending');
                    },
                    success: function(){
                        console.log('success');
                        $('.modal-window-order-success').css('z-index','0');
                    }
                });
                localStorage.setItem('lastclear', time_now);
        })
                
    } else {
        $('.modal-window-order-button.active').off();
        $('.modal-window-order-button.active').removeClass('active');
    }   
}

// function openFeedbackModalWindow(){
//     $('.modal-window-order-cons-container').addClass('open');
//     $('.modal-window-reqcall').mask("+7 (999) 999 99 99", {autoclear: false});
//     time_last = localStorage.getItem('lastclear');
//     if (time_last == null) { 
//         time_last = 0 
//     }     
//     time_now  = (new Date()).getTime();
//     if ((time_now - time_last) > 1000 * 60 * 15) {
//         $('.modal-window-order-success').off();
//         document.querySelector('.modal-window-reqcall').onkeyup = onPhonesChange;
//         //document.querySelector('.modal-window-reqcall-input').onkeyup = onPhoneChange;
//     } else {
//         $('.modal-window-order-success').css('z-index','0');
//     }
// }

function openFeedbackWriteAs(){
    $('.modal-window-order-write-container').addClass('open');
}

function exitFeedbackModalWindow(){
    $('.modal-window-order-cons-container').removeClass('open');
}


function exitFeedbackWriteAs(){
    $('.modal-window-order-write-container').removeClass('open');
}

function openHintWindowFix(){
    $('.hint-window-container-fix').addClass('open');
}

function exitHintWindowFix(){
    $('.hint-window-container-fix').removeClass('open');
}

function openHintWindowHour(){
    $('.hint-window-container-hour').addClass('open');
}

function exitHintWindowHour(){
    $('.hint-window-container-hour').removeClass('open');
}

function openHintWindowDed(){
    $('.hint-window-container-ded').addClass('open');
}

function exitHintWindowDed(){
    $('.hint-window-container-ded').removeClass('open');
}

function openHintWindowUX(){
    $('.hint-window-container-ux').addClass('open');
}

function exitHintWindowUX(){
    $('.hint-window-container-ux').removeClass('open');
}

function openHintWindowMVP(){
    $('.hint-window-container-mvp').addClass('open');
}

function exitHintWindowMVP(){
    $('.hint-window-container-mvp').removeClass('open');
}

function openHintWindowModel(){
    $('.hint-window-container-model').addClass('open');
}

function exitHintWindowModel(){
    $('.hint-window-container-model').removeClass('open');
}

var a = 0;
function showReviews(){    

        // target_current_vacancy = $('.reviews-form-end');
        // $('html, body').animate({
        //     scrollTop:  target_current_vacancy.offset().top 
        // }, 1000);

    var e = $('.reviews-form'); 
    e.scrollTop();
    if(e.scrollTop() == 0){
        a = 0;
        a += 200;
    }
    a += 200;
    e.scrollTop(a);
}



$(window).ready(function(){
       
        
        if ($(window).width()>1280) {
            // $('.web-development-services-form').paroller({ factor: '0.15', type: 'foreground', direction: 'vertical' });
            // $('.about-process-form').paroller({ factor: '0.15', type: 'foreground', direction: 'vertical' });
            // $('.price-mobile-app-form').paroller({ factor: '0.09', type: 'foreground', direction: 'vertical' });
            // $('.about-company-landing-part-left-block-container').paroller({ factor: '0.15', type: 'foreground', direction: 'vertical' }); 
        }

        
        
        $('.card').hover(function(){
            $(this).toggleClass('is-flipped');
        });    
});

$(window).ready(function(){
    $('.completed-projects-slider-item').mousemove(        
        function(event){
            var target = $('.completed-projects-slider-item:hover');                   
            var hover_h = event.pageY-target.offset().top
            var hover_w = event.pageX-target.offset().left            
            $('.completed-project-plexus').css('margin-top',-(hover_h/14.4-15)+"px");
            $('.completed-project-plexus').css('margin-left',-(hover_w/11.4/2)+"px");
        }
    )
    
})
$(window).ready(function(){
    var onButtonCloseNav = function() {
        // if (screen.width < 481){
            var active = document.querySelector('.navigation.active');
            var nav = document.querySelector('.navigation__toggle').parentNode;   
            if (!active) {
                // $('.landing-part-title').addClass('active');
                nav.classList.add('active');
            } else {
                nav.classList.remove('active');
                // $('.landing-part-title').removeClass('active');
            }
        // }
    };
    $('.navigation__toggle').click(onButtonCloseNav);
});

$(window).scroll(function() {
        if ($(this).scrollTop() > scrollNumber) { // когда скролл ниже начала страницы
            $('.main-header').addClass("fix");
        } else { // когда скролл вверху
            $('.main-header').removeClass("fix");
        } 
    });
