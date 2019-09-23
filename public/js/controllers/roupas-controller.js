angular.module('estoque').controller('RoupasController', function($scope, $http) {
	
	$scope.roupas = [];
	$scope.filtro = '';
	$scope.mensagem = '';
	var apiURL = "http://localhost:9050/api/roupas";


	$http.get(apiURL + '/getAllRoupas')
	.success(function(retorno) {
		console.log(retorno);
		$scope.roupas = retorno; // não precisa fazer retorno.data
	})
	.error(function(erro) {
		console.log(erro);
	});

	$scope.remover = function(roupa) {

		$http.delete(apiURL + '/deleteRoupa', roupa._id)
		.success(function() {
			var indiceDaRoupa = $scope.roupas.indexOf(roupa);
			$scope.roupas.splice(indiceDaRoupa, 1);
			$scope.mensagem = 'Item ' + roupa.codigoItem + ' removido com sucesso!';
		})
		.error(function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar o item ' + roupa.codigoItem;
		});
	};

});