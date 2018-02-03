angular.module('noserv').directive('directive', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attribute) {
            scope.$$postDigest(function () {
                $('#addBoar').click(function () {
                    $('#aImage').html('<img src="../assets/boarf.gif">')
                });

                $('#addRhino').click(function () {
                    $('#aImage').html('<img src="../assets/rhinof.gif">')
                });

                $('#clear').click(function () {
                    $('#aImage').html('')
                });

                $('#addBoar2').click(function () {
                    $('#bImage').html('<img src="../assets/boarf.gif">')
                });

                $('#addRhino2').click(function () {
                    $('#bImage').html('<img src="../assets/rhinof.gif">')
                });
                $('#clear2').click(function () {
                    $('#bImage').html('')
                });


                $('#fight').click(function () {
                    $('#bImage').append(' GYŐZELEM ');
                    $('#aImage').append(' VERESÉG ');
                });
            })




        }
    }
})