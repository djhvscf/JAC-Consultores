'use strict';

angular.module('jacconsultores', ['ngRoute', 'jacconsultoresControllers', 'jacconsultoresServices'])

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
                controller: "propiedadCtrl",
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
                controller: "loteCtrl",
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
                controller: "condominioCtrl",
                controllerAs: "listaCondominio"
            }
        ).otherwise({
            redirectTo: '/agregarPropiedad'
        });
    });