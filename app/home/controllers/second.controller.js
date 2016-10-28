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
