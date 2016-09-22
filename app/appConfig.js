/**
 * Routing for the complete web app
 */
angular.module('monitorApp').config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider, ngToastProvider) {

	// for the loading spinner
	cfpLoadingBarProvider.includeSpinner = true;
	
	// for the ngToast configuration
	ngToastProvider.configure({
		animation: 'slide',
		timeout: 8000
	});
	
	$stateProvider.state('home', {
 		url: '/home',
 		templateUrl: 'app/home/home.html',
 		controller: 'homeController'
 	}).state('prod/pie', {
 		url: '/prod/pie',
 		templateUrl: 'prod/pie/pie.jsp',
 		controller : 'pieController'
 	}).state('qa/pie', {
 		url: '/qa/pie',
 		templateUrl: 'qa/pie/qaPie.jsp',
 		controller: 'qaPieController'
 	});

 	$urlRouterProvider.otherwise('home');

});