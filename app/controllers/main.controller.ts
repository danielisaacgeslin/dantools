(()=>{
	'use strict';
	class MainController {
		static $inject = ['$scope'];
		public test: string;

		constructor(private $scope: ng.IScope){
			this.test = 'testing this controller';
		}
	}
	angular.module('app').controller('mainController', MainController);
})();
