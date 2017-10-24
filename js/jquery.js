$(document).ready(function(){

// $(document).on('load', function(){

    $("#dialog").dialog({
        autoOpen: false,
        
    });
    $("#opener").click(function () {
        $("#dialog").dialog("open");
        $("#show").css("display", 'block')
        $("#rhinoss").css("display", 'block')
     
    });
    

    

    $('#addBoar').click(function(){
        $('#aImage').html('<img src="./img/boarf.gif">')
    });

    $('#addRhino').click(function(){
        $('#aImage').html('<img src="./img/rhinof.gif">')
    });

    $('#clear').click(function(){
        $('#aImage').html('')
    });

    $('#addBoar2').click(function(){
        $('#bImage').html('<img src="./img/boarf.gif">')
    });

    $('#addRhino2').click(function(){
        $('#bImage').html('<img src="./img/rhinof.gif">')
    });

    $('#clear2').click(function(){
        $('#bImage').html('')
    });


    $('#fight').click(function(){
        $('#bImage').append(' GYŐZELEM ');
        $('#aImage').append(' VERESÉG ');
    });


});
// });
