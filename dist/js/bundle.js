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
        autoOpen: false

    });
    $("#opener").click(function () {
        $("#dialog").dialog("open");
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
