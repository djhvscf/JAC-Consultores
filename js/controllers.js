var jacconsultoresControllers = angular.module('jacconsultoresControllers', ['GeneralService']);

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
                generalService.generateNoty("La Propiedad se agreg&oacute correctamente", 'success');
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
    $scope.genericFormatter = function (value, row, index) {
        return value ? "S&iacute" : "No";
    };

    $scope.listaPropiedades = function () {
        $http.get('/api/propiedad')
            .success(function (data) {
                $scope.propiedades = data;
                $('#table').bootstrapTable({
                    data: data,
                    undefinedText: "",
                    search: true,
                    locale: "es-CR",
                    showColumns: true,
                    columns: [{
                        field: 'isVenta',
                        title: 'Es una Venta',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'direccion',
                        title: 'Direcci&oacuten'
                    }, {
                        field: 'isPropietario',
                        title: 'Es del Propietario',
                        sortable: true,
                        formatter: $scope.genericFormatter
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
                        title: 'Tiene Oficina',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'terra',
                        title: 'Tiene Terraza',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'patio',
                        title: 'Tiene Patio',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'sala',
                        title: 'Tiene Sala',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'anteComedor',
                        title: 'Tiene Ante-Comedor',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'ctoServ',
                        title: 'Tiene Cuarto de Servicio',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'salaTv',
                        title: 'Tiene Sala de Televisi&oacuten',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'cocina',
                        title: 'Tiene Cocina',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'ctoPilas',
                        title: 'Tiene Cuarto de Pilas',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'bodega',
                        title: 'Tiene Bodega',
                        sortable: true,
                        formatter: $scope.genericFormatter
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

jacconsultoresControllers.controller('loteCtrl', function ($scope, $http, generalService) {
    var that = this;
    $scope.formLote = {};

    $scope.createLote = function () {
        $http.post('/api/lote', $scope.formLote)
            .success(function(data) {
                $scope.formLote = {};
                generalService.generateNoty("El Lote se agreg&oacute correctamente", 'success');
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
});

jacconsultoresControllers.controller('listaLotesCtrl', function ($scope, $http) {
    $scope.genericFormatter = function (value, row, index) {
        return value ? "S&iacute" : "No";
    };

    $scope.listaLotes = function () {
        $http.get('/api/lote')
            .success(function (data) {
                $scope.propiedades = data;
                $('#table').bootstrapTable({
                    data: data,
                    undefinedText: "",
                    search: true,
                    locale: "es-CR",
                    showColumns: true,
                    columns: [{
                        field: 'residencial',
                        title: 'Residencial'
                    }, {
                        field: 'direccion',
                        title: 'Direcci&oacuten'
                    }, {
                        field: 'isPropietario',
                        title: 'Es del Propietario',
                        sortable: true,
                        formatter: $scope.genericFormatter
                    }, {
                        field: 'descripcion',
                        title: 'Descripci&oacuten'
                    }, {
                        field: 'planoCatastro',
                        title: 'Plano Catastro',
                        sortable: true
                    }, {
                        field: 'cuotaMant',
                        title: 'Cuota de Mantenimiento',
                        sortable: true
                    }, {
                        field: 'area',
                        title: '&Aacuterea',
                        sortable: true
                    }, {
                        field: 'preciom2',
                        title: 'Precio por m2',
                        sortable: true
                    }, {
                        field: 'precioTotal',
                        title: 'Precio Total',
                        sortable: true
                    }, {
                        field: 'observaciones',
                        title: 'Observaciones'
                    }]
                });
            });
    };

    $scope.listaLotes();
});

jacconsultoresControllers.controller('clienteCtrl', function ($scope) {
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