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
