angular.module('meuApp')
.controller('calculadoraController', function($scope) {
    $scope.vals = {
        pri: 0,
        seg: 0,
        res: 0
    };
    $scope.somar = function() {
        $scope.vals.res = $scope.vals.pri + $scope.vals.seg;
    };
    $scope.subtrair = function() {
        $scope.vals.res = $scope.vals.pri - $scope.vals.seg;
    };
    $scope.multiplicar = function() {
        $scope.vals.res = $scope.vals.pri * $scope.vals.seg;
    };
    $scope.dividir = function() {
        $scope.vals.res = $scope.vals.pri / $scope.vals.seg;
    };  

    $scope.colocarTudo = function() {
        somar = $scope.vals.pri + $scope.vals.seg;
        somar = $scope.vals.pri + $scope.vals.seg;
        somar = $scope.vals.pri + $scope.vals.seg;

        somar = $scope.vals.pri + $scope.vals.seg;
    }

    $scope.limpar = function() {
        $scope.vals.pri = 0;
        $scope.vals.seg = 0;
        $scope.vals.res = 0;
    }
});