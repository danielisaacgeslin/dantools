(()=>{
	'use strict';
	angular.module('app').controller('secondController', secondController);

	secondController.$inject = ['$scope'];
	function secondController($scope: ng.IScope){
		const vm = this;
    vm.test = 'second';

		init();

		function init(): void{

		}
	}
})();
