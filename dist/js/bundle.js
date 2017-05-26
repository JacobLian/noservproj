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

  $scope.getData = service.getData();
});
"use strict";
'use strict';

angular.module('noserv').service('service', function () {

    var data = [{
        species: ''

    }, {
        species: ''

    }];

    this.getData = function () {
        return data;
    };
});
//# sourceMappingURL=bundle.js.map
