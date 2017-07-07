jQuery(document).ready(function($) {  
$(window).scroll(function(){
    if  ($(window).scrollTop() > 300)
        $('#slidebox').animate({'left':'10px'},300);
        else
        $('#slidebox').stop(true).animate({'left':'-430px'},500);   
    });
    $('#slidebox .close').bind('click',function(){
        $(this).parent().remove();  
    });
    });