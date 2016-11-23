(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
require('./core/modules/app.module');
require('./core/modules/app.core.module');
require('./home/modules/app.main.module');
require('./home/controllers/main.controller');
require('./home/controllers/second.controller');

},{"./core/modules/app.core.module":2,"./core/modules/app.module":3,"./home/controllers/main.controller":4,"./home/controllers/second.controller":5,"./home/modules/app.main.module":6}],2:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app.core', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
})();

},{}],3:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app', ['app.core', 'app.main']);
})();

},{}],4:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app.main').controller('mainController', mainController);
    mainController.$inject = ['$scope'];
    function mainController($scope) {
        var vm = this;
        vm.test = 'testing this controller';
        vm.a = 0;
        vm.b = 0;
        vm.r = 0;
        $scope.sum = sum;
        init();
        function init() {
        }
        function sum() {
            vm.r = Number(vm.a) + Number(vm.b);
        }
    }
})();

},{}],5:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app.main').controller('secondController', secondController);
    secondController.$inject = ['$scope'];
    function secondController($scope) {
        var vm = this;
        vm.test = 'second';
        init();
        function init() {
        }
    }
})();

},{}],6:[function(require,module,exports){
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

},{}]},{},[1]);
