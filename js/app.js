angular.module('noserv', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('','/')

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: './views/home-view.html',

    })
    .state('animals', {
        url: '/animals',
        templateUrl: './views/animals.html',
       
    })
    .state('battle', {
        url: '/battle',
        templateUrl:'./views/battle.html'
    })
})