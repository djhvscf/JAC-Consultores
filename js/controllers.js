var jacconsultoresControllers = angular.module('jacconsultoresControllers', []);

jacconsultoresControllers.controller('propiedadCtrl', function ($scope, $http) {
    var that = this;

    $scope.formPropiedad = {};

    $scope.isCondominio = true;
    $scope.isCasaResindencial = false;

    $scope.hideControls = function (name) {
        $scope.isCondominio = name === "casa" ? false : true;
        $scope.isCasaResindencial = name === "casa" ? true : false;
    };

    /**************
     * Condominos
     *************/
    $http.get('/api/condominios')
        .success(function(data) {
            $scope.condominios = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createCondominio = function(){
        $http.post('/api/condominios', {nombre: "Tramonto"})
            .success(function(data) {
                $scope.formData = {};
                $scope.condominios = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
    /*****************
     * Condominos
     ****************/

    /**************
     * Propiedades
     *************/

    $scope.createPropiedad = function () {
        $http.post('/api/propiedad', $scope.formPropiedad)
            .success(function(data) {
                $scope.formPropiedad = {};
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    /**************
     * Propiedades
     *************/
});

jacconsultoresControllers.controller("listaPropiedadesCtrl", function ($scope, $http) {
    $scope.listaPropiedades = function () {
        $http.get('/api/propiedad')
            .success(function (data) {
                $scope.propiedades = data;
                $('#table').bootstrapTable({
                    data: data,
                    undefinedText: "",
                    columns: [{
                        field: 'isVenta',
                        title: 'Es una Venta',
                        sortable: true
                    }, {
                        field: 'direccion',
                        title: 'Direcci&oacuten'
                    }, {
                        field: 'isPropietario',
                        title: 'Es del Propietario',
                        sortable: true
                    }, {
                        field: 'telefono',
                        title: 'Tel&eacutefono'
                    }, {
                        field: 'comision',
                        title: 'Comisi&oacuten',
                        sortable: true
                    }, {
                        field: 'cuotaMant',
                        title: 'Cuota de Mantenimiento',
                        sortable: true
                    }, {
                        field: 'cuotaSeg',
                        title: 'Cuota de Seguridad',
                        sortable: true
                    }, {
                        field: 'lote',
                        title: 'Lote',
                        sortable: true
                    }, {
                        field: 'const',
                        title: 'Construcci&oacuten',
                        sortable: true
                    }, {
                        field: 'anos',
                        title: 'A&ntildeos',
                        sortable: true
                    }, {
                        field: 'niveles',
                        title: 'Niveles',
                        sortable: true
                    }, {
                        field: 'garage',
                        title: 'Garage',
                        sortable: true
                    }, {
                        field: 'habitaciones',
                        title: 'Habitaciones',
                        sortable: true
                    }, {
                        field: 'banos',
                        title: 'Ba&ntildeos',
                        sortable: true
                    }, {
                        field: 'oficina',
                        title: 'Oficina',
                        sortable: true
                    }, {
                        field: 'terra',
                        title: 'Tiene Terraza',
                        sortable: true
                    }, {
                        field: 'patio',
                        title: 'Tiene Patio',
                        sortable: true
                    }, {
                        field: 'sala',
                        title: 'Tiene Sala',
                        sortable: true
                    }, {
                        field: 'anteComedor',
                        title: 'Tiene Ante-Comedor',
                        sortable: true
                    }, {
                        field: 'ctoServ',
                        title: 'Tiene Cuarto de Servicio',
                        sortable: true
                    }, {
                        field: 'salaTv',
                        title: 'Tiene Sala de Televisi&oacuten',
                        sortable: true
                    }, {
                        field: 'cocina',
                        title: 'Tiene Cocina',
                        sortable: true
                    }, {
                        field: 'ctoPilas',
                        title: 'Tiene Cuarto de Pilas',
                        sortable: true
                    }, {
                        field: 'bodega',
                        title: 'Tiene Bodega',
                        sortable: true
                    }, {
                        field: 'otros',
                        title: 'Otros'
                    }, {
                        field: 'areaComp',
                        title: '&Aacuterea Compartida',
                        sortable: true
                    }, {
                        field: 'observaciones',
                        title: 'Observaciones'
                    }]
                });
            });
    };

    $scope.listaPropiedades();
});

jacconsultoresControllers.controller('loteCtrl', function ($scope, $http) {
    var that = this;
    $scope.formData = {text: "str"};

    // Cuando se cargue la página, pide del API todos los TODOs
    $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Cuando se añade un nuevo TODO, manda el texto a la API
    $scope.createTodo = function(){
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    // Borra un TODO despues de checkearlo como acabado
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
});

jacconsultoresControllers.controller('clienteCtrl', function ($scope) {
    var that = this;
});