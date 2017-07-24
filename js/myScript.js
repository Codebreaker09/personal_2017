$(document).ready(function(){
    $('#hide').click(function(){
        $('#p_one').hide();
    });
    
    $('#show').click(function(){
        $('#p_one').show();
    });
    
    $('#toggle').click(function(){
        $('#p_one').toggle(500);
    });
    
    $('p').click(function(){
        $(this).toggleClass('changeBack')
    });
});