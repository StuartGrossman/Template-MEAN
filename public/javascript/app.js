(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/home',
			contorller: 'MovieController',
			templateUrl: 'templates/Home.html'
		})

		$urlRouterProvider.otherwise('/home');
	}
})();
