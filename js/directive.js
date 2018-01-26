angular.module('noserv').directive('directive', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attribute){
            scope.$$postDigest(function() {
    $("#rhinodialog").dialog({
        autoOpen: false,
    });
    $("#boardialog").dialog({
        autoOpen: false,
    });
    $("#hino").click(function () {
        $("div.col").toggleClass('.extended');
    })

    $("#openRhino").click(function () {
        $("#rhinodialog").dialog("open");
    });

    $("#openBoar").click(function () {
        $("#boardialog").dialog('open')
    });

    $('#addBoar').click(function(){
        $('#aImage').html('<img src="../assets/boar.jpg">')
    });

    $('#addRhino').click(function(){
        $('#aImage').html('<img src="../assets/rhinof.gif">')
    });

    $('#clear').click(function(){
        $('#aImage').html('')
    });

    $('#addBoar2').click(function(){
        $('#bImage').html('<img src="../assets/boarf.gif">')
    });

    $('#addRhino2').click(function(){
        $('#bImage').html('<img src="../assets/rhinof.gif">')
    });
    $('#clear2').click(function(){
        $('#bImage').html('')
    });


    $('#fight').click(function(){
        $('#bImage').append(' GYŐZELEM ');
        $('#aImage').append(' VERESÉG ');
    });
            })




}
        }
    })