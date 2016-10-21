(()=>{
  'use strict';
  angular.module('app.main', []).config(config);

  function config(
		$stateProvider: ng.ui.IStateProvider,
		$urlRouterProvider: ng.ui.IUrlRouterProvider,
		$locationProvider: ng.ILocationProvider
	){
		$locationProvider.html5Mode(true).hashPrefix('*');

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('/', {
			url : '/',
			templateUrl : 'main.html',
			controller: 'mainController',
			controllerAs: 'vm'
		}).state('/second', {
			url : '/second',
			templateUrl : 'second.html',
			controller: 'secondController',
			controllerAs: 'vm'
		});
	}
})();
