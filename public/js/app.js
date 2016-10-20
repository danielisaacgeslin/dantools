(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').controller('mainController', mainController);
    mainController.$inject = ['$scope'];
    function mainController($scope) {
        var vm = this;
        vm.test = 'testing this controller';
        init();
        function init() {
        }
    }
})();

},{}],3:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app').controller('secondController', secondController);
    secondController.$inject = ['$scope'];
    function secondController($scope) {
        var vm = this;
        vm.test = 'second';
        init();
        function init() {
        }
    }
})();

},{}],4:[function(require,module,exports){
'use strict';
require('./modules/app.module');
require('./config');
require('./controllers/main.controller');
require('./controllers/second.controller');

},{"./config":1,"./controllers/main.controller":2,"./controllers/second.controller":3,"./modules/app.module":5}],5:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('app', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
})();

},{}]},{},[4]);
