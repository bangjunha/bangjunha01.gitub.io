$(document).ready(function(){
    $('img').mouseenter(function(){
        $('img').animate({
        width: "100%"
        });
    });
    $('.button').click(function(){
        $('div').toggle();
    });
    $('table').click(function(){
        $('table').animate({
            marginLeft: '350px',
            height: '+500px',
            width: '+500px'
        });
    });
});