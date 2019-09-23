angular.module('estoque')
	.controller('RoupaController', function($scope, $http, $routeParams) {

		$scope.roupa = {};
		$scope.mensagem = '';
		var apiURL = "http://localhost:9050/api/roupas";
		


		if($routeParams.roupaId) {
			$http.get(apiURL+'/getRoupa?_id='+ $routeParams.roupaId)
			.success(function(roupa) {
				$scope.roupa = roupa;
			})
			.error(function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o item'
			});
		}

		$scope.submeter = function() {

			if ($scope.formulario.$valid) {

				if($routeParams.roupaId) {

					$http.post(apiURL + '/updateRoupa?_id='+$routeParams.roupaId, $scope.roupa)
					.success(function() {
						$scope.mensagem = 'Item alterado com sucesso';
					})
					.error(function(erro) {
						console.log(erro);
						$scope.mensagem = 'Não foi possível alterar';
					});

				} else { 

					$http.post(apiURL+'/createRoupa', $scope.roupa)
					.success(function() {
						$scope.roupa = {};
						$scope.mensagem = 'Item cadastrado com sucesso';
					})
					.error(function(erro) {
						console.log(erro);
						$scope.mensagem = 'Não foi possível cadastrar o item';
					})
				}
			}
		};
	});