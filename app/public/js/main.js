angular.module('estoque', ['ngAnimate', 'ngRoute'])
	.config(function($routeProvider){
		

		$routeProvider.when('/roupas', {
			templateUrl: 'partials/principal.html',
			controller: 'RoupasController'
		})
		
		.when('/roupas/new', {
			templateUrl: 'partials/roupa.html',
			controller: 'RoupaController'
		})
		
		$routeProvider.when('/roupas/edit/:roupaId', {
			templateUrl: 'partials/roupa.html',
			controller: 'RoupaController'
		})
		
		$routeProvider.otherwise({redirectTo: '/roupas'});

	});

