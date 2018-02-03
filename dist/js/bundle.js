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

        $scope.facts = function () {
                var info = service.getFacts();
                var a = document.getElementById('hi');
                var b = document.getElementById('hello');
                roll();
                function roll() {
                        var randomNum1 = Math.floor(Math.random() * info.length);
                        var randomNum2 = Math.floor(Math.random() * info.length);
                        a.innerHTML = info[randomNum1];
                        b.innerHTML = info[randomNum2];
                        rollAgain();
                        function rollAgain() {
                                if (a.innerHTML == b.innerHTML) {
                                        roll();
                                }
                        }
                }
        };

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
                $('#addBoar').click(function () {
                    $('#aImage').html('<img src="../assets/boarf.gif">');
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
    var facts = ['I like Cats', 'You like cats', 'we like cats', 'they like cats', 'it likes cats', 'dogs', 'money', 'dig', 'wow', 'happy'];
    this.getAnimals = function () {
        return animals;
    };
    this.getFacts = function () {
        return facts;
    };
});
//# sourceMappingURL=bundle.js.map
