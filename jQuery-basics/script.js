$(document).ready(function(){
    $('#content1').hide();

    $('#content2').css({
        "background-color": "#000",
        "color" : "#fff"
    });

    $('#content2').on('click', function() {
        $(this).fadeOut('slow');
    });

    $('#content3').on('dblclick', function() {
        $('#content2').fadeIn('slow');
    });

    let fourBig = false;
    $('#content4').on('click', function() {
        if(fourBig) {
            fourBig=false;
            $(this).width('50px');
            $(this).height('50px');
        } else {
            fourBig=true;
            $(this).width('400px');
            $(this).height('400px');
        }
    });
});