$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: '/reviews/get',
        success: function(data){
            for(var i = 0; i < data.length; i++){
                $('.reviews-form').append('\
                <div class="reviews-form-person-info">\
                    <div class="reviews-form-person-info-avatar"></div>\
                    <div class="reviews-form-person-info-name">\
                        <div class="reviews-form-person-info-person-name">'+ data[i].name +'</div>\
                        <div class="reviews-form-person-info-company-name">'+ data[i].position +'</div>\
                    </div>\
                </div>\
                <div class="reviews-form-review">\
                    <p class="reviews-form-review-text">'+ data[i].text +'</p>\
                </div>\
                ');
            }
            $('.reviews-form').append('\
            <div class="reviews-form-end"></div>\
        ');
        }
    });
});