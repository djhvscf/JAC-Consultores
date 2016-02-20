var jacconsultoresControllers = angular.module('jacconsultoresControllers', []);

jacconsultoresControllers.controller('propiedadCtrl', function ($scope) {
    var that = this;

    $scope.isCondominio = true;
    $scope.isCasaResindencial = false;

    $scope.hideControls = function (name) {
        $scope.isCondominio = name === "casa" ? false : true;
        $scope.isCasaResindencial = name === "casa" ? true : false;
    };
});

jacconsultoresControllers.controller('loteCtrl', function ($scope) {
    var that = this;
});

jacconsultoresControllers.controller('clienteCtrl', function ($scope) {
    var that = this;
});