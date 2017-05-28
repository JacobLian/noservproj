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
"use strict";

$(document).ready(function () {

    $("#dialog").dialog({
        autoOpen: false,
        height: 400,
        width: 500
    });
    $("#opener").click(function () {
        $("#dialog").dialog("open");
    });
});
'use strict';

angular.module('noserv').service('service', function () {

    var data = [{
        species: '',
        strengths: '',
        weakness: '',
        family: '',
        habitat: ''

    }, {
        species: '',
        strengths: '',
        weakness: '',
        family: '',
        habitat: ''

    }];

    this.getData = function () {
        return data;
    };
});
//# sourceMappingURL=bundle.js.map
