angular.module('meuApp')
.controller('criarUsuariosController', function($scope) {
    // Lógica do controlador
    $scope.info1 = "Este é um objeto de texto";
    $scope.info2 = {
        nome: "Fabio",
        sobrenome:"Fonseca"
    }

    $scope.count = 0;
    $scope.trocarInfo = function() {
        $aux = $scope.info2.nome;
        $scope.info2.nome = $scope.info2.sobrenome;
        $scope.info2.sobrenome = $aux;
        $scope.count += 1;
    }
});