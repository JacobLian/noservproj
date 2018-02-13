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
        url: '/videos',
        templateUrl: './views/videos.html'
    });
});
'use strict';

angular.module('noserv').controller('ctrl', function ($scope, service) {

        $scope.animals = service.getAnimals();
        $scope.video = function (animal) {
                // document.getElementById('videoPlayer').setAttribute('src', animal)
                var cat = "https://www.youtube.com/embed/R02QrS2aCDM";
                var dog = "https://www.youtube.com/embed/-CFtIKfYDv0";
                var answer = 'hello';
                console.log(animal);
        };

        $scope.facts = function () {
                var info = service.getFacts();
                var a = document.getElementById('fact1');
                var b = document.getElementById('fact2');
                var c = document.getElementById('fact3');
                roll();
                function roll() {
                        var randomNum1 = Math.floor(Math.random() * info.length);
                        var randomNum2 = Math.floor(Math.random() * info.length);
                        var randomNum3 = Math.floor(Math.random() * info.length);
                        a.innerHTML = info[randomNum1];
                        b.innerHTML = info[randomNum2];
                        c.innerHTML = info[randomNum3];
                        rollAgain();
                        function rollAgain() {
                                if (randomNum1 == randomNum2 || randomNum2 == randomNum3 || randomNum1 == randomNum3) {
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
        'habitat': 'Élőhely: Füves területeken és nyílt szavannákon',
        'video': 'https://www.youtube.com/embed/R02QrS2aCDM'
    }, {
        'species': 'Vaddisznó',
        'strengths': 'Erőségek: Jól úsznak',
        'weakness': 'Gyengeségek: Többnyire lassú ügetéssel szaladnak',
        'family': 'Utazás: A vaddisznó családi közösségekben, csapatokban jár, ezt kondának nevezzük',
        'habitat': 'Élőhely: Csak a minden búvóhely nélküli, teljesen nyílt területeket és a hegyek magas részeit kerülik.',
        'video': 'https://www.youtube.com/embed/-CFtIKfYDv0'
    }];
    var facts = ['Gorillas can catch human colds and other illnesses', 'Ostriches can run faster than horses, and the males can roar like lions', 'A lion in the wild usually makes no more than twenty kills a year.', 'Female lions do 90% of the hunting!', 'There are 50,000 spiders per acre in green areas', 'Bats are the only mammals who can fly', 'Bat leg bones are so thin that no bat can walk', 'Cows can sleep standing up, but they can only dream laying down', 'Aligators can live up to 100 years', 'An elephant tooth can weigh up to 9 pounds', 'Ants never sleep and don\'t have lungs', 'One cow gives off enough methane gas in a single day to fill 400 liter bottles', 'At birth, baby kangaroos are only about an inch long', 'Blue whales weigh as much as 300 elephants', 'Cats have 32 muscles in each ear', 'Baby horses can walk and run after just a few hours of being born', 'Komodo dragons can run up to 11 miles an hour in short bursts', 'Spectacled bears are the only wild bear species in South America', 'An elephant can smell water up to 3 miles away', 'If you cut off a snail\'s eye, it will grow a new one', 'On average, cows poop 16 times per day', 'Deer can\'t eat hay', 'No tigers ever have the same stripes, and this is how individual tigers can be identified', 'Oysters can change from one gender to another and back again depending on which is best for mating', 'Squirrels cannot see the  color red', 'A starving mouse will eat its own tail', 'Only 5 to 10 recent of cheeetah cubs make it to adulthood', 'Ferets sleep around 20 hours a day', 'Sharks have been aroound longer than dinosaurs', 'Aligators cannot move backwards', 'Shark corneas are being used in human eye transplants', 'There are currently over a million animal species upon planet earth', 'The crocodile\'s tongue is unmovable, as it is attached to the roof of its mouth', 'The Tyrannosaurus Rex went extinct 65 million years ago', 'The color red doesn\'t make bulls angry; they are color-blind', 'The oldest recorded elephant lived for 82 years', 'There are over 2700 types of snakes in the world and they live in deserts, forests, oceans, streams, lakes', 'An adult lion\'s roar is so loud; it can be heard up to five miles away', 'Crocodiles eat stones', 'A male gorilla can eat 40 pounds of food a day', 'There is no record of a human being attacked by a healthy wolf', 'Hyenas regulary eat the faces of other animals', 'A giraffe has the same number of bones in its neck as a man'];
    this.getAnimals = function () {
        return animals;
    };
    this.getFacts = function () {
        return facts;
    };
});
//# sourceMappingURL=bundle.js.map
