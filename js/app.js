$( document ).ready(function() {
    
    $('.btn').on('click', function() {
        //$('.btn').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');

    });

    $('btn').on('click',function(){
        $(this).style.display='none';
    });

    // show all work 
    $("#show-all-work-portfolio").click(function(){
        $(".show-work").show();
    });
    
    // show div psd to html work
    $("#hide-psdWork").click(function(){
        $(".psdtohtml-work").show();
        $(".react-work").hide();
        $(".angular-work").hide();
        $(".vue-work").hide();
        $(".bootstrap-sass-work ").hide();
    });

    // show div react work
    $("#hide-reactWork").click(function(){
        $(".psdtohtml-work").hide();
        $(".react-work").show();
        $(".angular-work").hide();
        $(".vue-work").hide();
        $(".bootstrap-sass-work ").hide();
    });

    // show div angular work
    $("#hide-angularWork").click(function(){
        $(".psdtohtml-work").hide();
        $(".react-work").hide();
        $(".angular-work").show();
        $(".vue-work").hide();
        $(".bootstrap-sass-work ").hide();
    });

    // show div vue work
    $("#hide-vueWork").click(function(){
        $(".psdtohtml-work").hide();
        $(".react-work").hide();
        $(".angular-work").hide();
        $(".vue-work").show();
        $(".bootstrap-sass-work ").hide();
    });

    // show div bootstrap & sass work
    $("#hide-bootstrap-sassWork").click(function(){
        $(".psdtohtml-work").hide();
        $(".react-work").hide();
        $(".angular-work").hide();
        $(".vue-work").hide();
        $(".bootstrap-sass-work ").show();
    });
    
    $('.firstColor').on('click',function(){
    $(this).css('color', 'green');
});
});

 