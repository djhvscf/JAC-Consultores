jacconsultoresControllers.controller('clienteCtrl', function ($scope, $http, clienteService, generalService) {
    $scope.formCliente = {};

    $scope.createCliente = function(){
        clienteService.createCliente($scope.formCliente, function(data) {
            $scope.formCliente = {};
            generalService.generateNoty("Se agreg&oacute correctamente el cliente", "success");
        });
    };

    $scope.genericFormatter = function (value, row, index) {
        return value ? "S&iacute" : "No";
    };

    $scope.listaClientes = function () {
        clienteService.getClientes(function (data) {
            $scope.clientes = data;
            $('#table').bootstrapTable({
                data: data,
                undefinedText: "",
                search: true,
                locale: "es-CR",
                showColumns: true,
                columns: [{
                    field: 'isCompra',
                    title: 'Necesita comprar',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'nombre',
                    title: 'Nombre'
                }, {
                    field: 'telefono',
                    title: 'Tel&eacutefono'
                }, {
                    field: 'telefono2',
                    title: 'Tel&eacutefono 2'
                }, {
                    field: 'isReferido',
                    title: 'Es Referido',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'telefonoReferido',
                    title: 'Tel&eacutefono de la persona que refiere'
                }, {
                    field: 'comision',
                    title: 'Comisi&oacuten',
                    sortable: true
                }, {
                    field: 'fecha',
                    title: 'Fecha'
                }, {
                    field: 'casa',
                    title: 'Busca casa',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'condominio',
                    title: 'Busca condominio',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'lote',
                    title: 'Busca lote',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'otrosCliente',
                    title: 'Comentarios sobre el cliente'
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
                    title: 'Necesita Oficina',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'terra',
                    title: 'Necesita Terraza',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'patio',
                    title: 'Necesita Patio',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'sala',
                    title: 'Necesita Sala',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'anteComedor',
                    title: 'Necesita Ante-Comedor',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'ctoServ',
                    title: 'Necesita Cuarto de Servicio',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'salaTv',
                    title: 'Necesita Sala de Televisi&oacuten',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'cocina',
                    title: 'Necesita Cocina',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'ctoPilas',
                    title: 'Necesita Cuarto de Pilas',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'bodega',
                    title: 'Necesita Bodega',
                    sortable: true,
                    formatter: $scope.genericFormatter
                }, {
                    field: 'otros',
                    title: 'Otros'
                }, {
                    field: 'observaciones',
                    title: 'Observaciones'
                }]
            });
        });
    };
});
