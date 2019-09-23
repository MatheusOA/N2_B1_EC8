angular.module('estoque', ['ngAnimate', 'ngRoute'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/roupas', {
			templateUrl: 'partials/principal.html',
			controller: 'RoupasController'
		});

		$routeProvider.when('/roupas/new', {
			templateUrl: 'partials/roupa.html',
			controller: 'RoupaController'
		});

		$routeProvider.when('/roupas/edit/:roupaId', {
			templateUrl: 'partials/roupa.html',
			controller: 'RoupaController'
		});

		$routeProvider.otherwise({redirectTo: '/roupas'});

	});