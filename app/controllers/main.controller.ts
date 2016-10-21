(()=>{
	'use strict';
	angular.module('app.main').controller('mainController', mainController);

	mainController.$inject = ['$scope'];
	function mainController($scope: ng.IScope){
		const vm = this;
		vm.test = 'testing this controller';

		init();

		function init(): void{

		}
	}
})();
