'use strict';

angular.module('jacconsultores', ['ngRoute'])

    .config(function($routeProvider){
        $routeProvider.when("/agregarPropiedad",
            {
                templateUrl: "views/agregarPropiedad.html",
                controller: "propiedadCtrl",
                controllerAs: "propiedad"
            }
        ).when("/agregarLote",
            {
                templateUrl: "views/agregarLote.html",
                controller: "loteCtrl",
                controllerAs: "lote"
            }
        ).when("/agregarCliente",
            {
                templateUrl: "views/agregarCliente.html",
                controller: "clienteCtrl",
                controllerAs: "cliente"
            }
        );
    })

    .controller('propiedadCtrl', function($scope) {
        var that = this;

        $scope.isCondominio = true;
        $scope.isCasaResindencial = false;

        $scope.hideControls = function (name) {
            if(name === "casa"){
                //$(".cuotaseg").show();
                $scope.isCondominio = false;
                $scope.isCasaResindencial = true;
            } else {
                //$(".cuotaseg").hide();
                $scope.isCondominio = true;
                $scope.isCasaResindencial = false;
            }
        };
    }).controller("loteCtrl", function($scope) {
        var that = this;
    }).controller("clienteCtrl", function($scope) {
        var that = this;
    });