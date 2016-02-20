'use strict';

angular.module('jacconsultores', ['ngRoute', 'jacconsultoresControllers'])

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
        ).otherwise({
            redirectTo: '/agregarPropiedad'
        });
    });