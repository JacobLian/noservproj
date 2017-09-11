'use strict';

angular.module('noserv', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home-view.html'

    }).state('animals', {
        url: '/animals',
        templateUrl: './views/animals.html'

    }).state('battle', {
        url: '/battle',
        templateUrl: './views/battle.html'
    });
});
'use strict';

angular.module('noserv').controller('ctrl', function ($scope, service) {

        $scope.data = service.getData();
        console.log($scope.getData);
});
'use strict';

angular.module('noserv').directive('directive', function () {
    return {
        restrict: 'A',
        link: function link(scope, element, attribute) {
            scope.$$postDigest(function () {
                $("#rhinodialog").dialog({
                    autoOpen: false

                });
                $("#boardialog").dialog({
                    autoOpen: false

                });

                $("#openRhino").click(function () {
                    $("#rhinodialog").dialog("open");
                    // $("#rhino1").css("display", 'block')
                    // $("#rhinoInfo").css("display", 'block')
                });

                $("#openBoar").click(function () {
                    $("#boardialog").dialog('open');
                    // $("#boar1").css("display", 'block')
                    // $("#boarInfo").css("display", 'block')
                });

                $('#addBoar').click(function () {
                    $('#aImage').html('<img src="./img/boarf.gif">');
                });

                $('#addRhino').click(function () {
                    $('#aImage').html('<img src="./img/rhinof.gif">');
                });

                $('#clear').click(function () {
                    $('#aImage').html('');
                });

                $('#addBoar2').click(function () {
                    $('#bImage').html('<img src="./img/boarf.gif">');
                });

                $('#addRhino2').click(function () {
                    $('#bImage').html('<img src="./img/rhinof.gif">');
                });

                $('#clear2').click(function () {
                    $('#bImage').html('');
                });

                $('#fight').click(function () {
                    $('#bImage').append(' GYŐZELEM ');
                    $('#aImage').append(' VERESÉG ');
                });
            });
        }
    };
});
// $(document).ready(function(){

// // $(document).on('load', function(){

//     $("#dialog").dialog({
//         autoOpen: false,

//     });
//     $("#opener").click(function () {
//         $("#dialog").dialog("open");
//         $("#show").css("display", 'block')
//         $("#rhinoss").css("display", 'block')

//     });


//     $('#addBoar').click(function(){
//         $('#aImage').html('<img src="./img/boarf.gif">')
//     });

//     $('#addRhino').click(function(){
//         $('#aImage').html('<img src="./img/rhinof.gif">')
//     });

//     $('#clear').click(function(){
//         $('#aImage').html('')
//     });

//     $('#addBoar2').click(function(){
//         $('#bImage').html('<img src="./img/boarf.gif">')
//     });

//     $('#addRhino2').click(function(){
//         $('#bImage').html('<img src="./img/rhinof.gif">')
//     });

//     $('#clear2').click(function(){
//         $('#bImage').html('')
//     });


//     $('#fight').click(function(){
//         $('#bImage').append(' GYŐZELEM ');
//         $('#aImage').append(' VERESÉG ');
//     });


// });
// // });
"use strict";
'use strict';

angular.module('noserv').service('service', function () {

    var data = [{
        'species': 'Orszarvú',
        'strengths': 'Erőségek: kiváló hallás és szaglás',
        'weakness': 'Gyengeségek: viszonzlag gyenge látásúak',
        'family': 'Utazás: Főleg magányosan találhatóak meg, társaságban csak párosodás alkalmával',
        'habitat': 'Élőhely: Füves területeken és nyílt szavannákon'

    }, {
        'species': 'Vaddisznó',
        'strengths': 'Erőségek: Jól úsznak',
        'weakness': 'Gyengeségek: Többnyire lassú ügetéssel szaladnak',
        'family': 'Utazás: A vaddisznó családi közösségekben, csapatokban jár, ezt kondának nevezzük',
        'habitat': 'Élőhely: Csak a minden búvóhely nélküli, teljesen nyílt területeket és a hegyek magas részeit kerülik.'

    }];

    this.getData = function () {
        return data;
    };
});
//# sourceMappingURL=bundle.js.map
