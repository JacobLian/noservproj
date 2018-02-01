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

        $scope.animals = service.getAnimals();
        $scope.fact1 = service.getFact1();
        $scope.fact2 = service.getFact2();

        // $scope.info = service.getInfo().then(function(response){
        //         console.log(response);
        // })
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
                });

                $("#openBoar").click(function () {
                    $("#boardialog").dialog('open');
                });

                $('#addBoar').click(function () {
                    $('#aImage').html('<img src="../assets/boar.jpg">');
                });

                $('#addRhino').click(function () {
                    $('#aImage').html('<img src="../assets/rhinof.gif">');
                });

                $('#clear').click(function () {
                    $('#aImage').html('');
                });

                $('#addBoar2').click(function () {
                    $('#bImage').html('<img src="../assets/boarf.gif">');
                });

                $('#addRhino2').click(function () {
                    $('#bImage').html('<img src="../assets/rhinof.gif">');
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
'use strict';

angular.module('noserv').service('service', function ($http) {

    var animals = [{
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

    this.getAnimals = function () {
        return animals;
    };

    var facts = ['I like Cats', 'You like cats', 'we like cats', 'they like cats', 'it likes cats', 'dogs', 'money', 'dig', 'wow', 'happy'];

    this.getFact1 = function () {
        var randomNumber = Math.floor(Math.random() * facts.length);
        return facts[randomNumber];
    };
    this.getFact2 = function () {
        var randomNumber = Math.floor(Math.random() * facts.length);
        return facts[randomNumber];
    };
    this.getFact = function () {
        document.getElementsByTagName('span').innerHTML = getFact1();
    };

    // this.getInfo = function(){
    //     return $http.get('http://quickstats.nass.usda.gov/api.json')
    // }
});
//# sourceMappingURL=bundle.js.map
