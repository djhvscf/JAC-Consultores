'use strict';

angular.module('jacconsultores', ['ngRoute', 'jacconsultoresControllers'])

    .config(function($routeProvider){
        $routeProvider.when("/agregarPropiedad",
            {
                templateUrl: "views/agregarPropiedad.html",
                controller: "propiedadCtrl",
                controllerAs: "propiedad"
            }
        ).when("/listaPropiedades",
            {
                templateUrl: "views/listaPropiedades.html",
                controller: "listaPropiedadesCtrl",
                controllerAs: "listaPropiedad"
            }
        ).when("/agregarLote",
            {
                templateUrl: "views/agregarLote.html",
                controller: "loteCtrl",
                controllerAs: "lote"
            }
        ).when("/listaLotes",
            {
                templateUrl: "views/listaLotes.html",
                controller: "listaLotesCtrl",
                controllerAs: "listaLote"
            }
        ).when("/agregarCliente",
            {
                templateUrl: "views/agregarCliente.html",
                controller: "clienteCtrl",
                controllerAs: "cliente"
            }
        ).when("/agregarCondominio",
            {
                templateUrl: "views/agregarCondominio.html",
                controller: "condominioCtrl",
                controllerAs: "condominio"
            }
        ).when("/listaCondominios",
            {
                templateUrl: "views/listaCondominios.html",
                controller: "listaCondominiosCtrl",
                controllerAs: "listaCondominio"
            }
        ).otherwise({
            redirectTo: '/agregarPropiedad'
        });
    });