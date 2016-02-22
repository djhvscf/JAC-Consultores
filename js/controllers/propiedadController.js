jacconsultoresControllers.controller('propiedadCtrl', function ($scope, $http, propiedadService, generalService) {
    var that = this;

    $scope.formPropiedad = {};

    $scope.isCondominio = true;
    $scope.isCasaResindencial = false;

    $scope.hideControls = function (name) {
        $scope.isCondominio = name === "casa" ? false : true;
        $scope.isCasaResindencial = name === "casa" ? true : false;
    };

    $scope.createPropiedad = function () {
        propiedadService.createPropiedad($scope.formPropiedad, function () {
            $scope.formPropiedad = {};
            generalService.generateNoty("Se agreg&oacute correctamente la propiedad", "success");
        });
    };

    $scope.genericFormatter = function (value, row, index) {
        return value ? "S&iacute" : "No";
    };

    $scope.listaPropiedades = function () {
        propiedadService.getPropiedades(function (data) {
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
});