(function () {
    'use strict';
    angular.module('app.main', []).config(config);
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('*');
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('/', {
            url: '/',
            templateUrl: 'home/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        }).state('/second', {
            url: '/second',
            templateUrl: 'home/second.html',
            controller: 'secondController',
            controllerAs: 'vm'
        });
    }
})();
