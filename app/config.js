module.exports = function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider.state('aboutUs', {
		url : "/aboutUs",
		templateUrl : "views/aboutUsView.html",
	});
};
