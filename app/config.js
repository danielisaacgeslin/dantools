(function () {
    'use strict';
    angular.module('app').config(config);
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('*');
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('/', {
            url: '/',
            templateUrl: 'main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        }).state('/second', {
            url: '/second',
            templateUrl: 'second.html',
            controller: 'secondController',
            controllerAs: 'vm'
        });
    }
})();
