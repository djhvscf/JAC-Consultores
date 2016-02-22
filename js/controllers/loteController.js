jacconsultoresControllers.controller('loteCtrl', function ($scope, $http, loteService, generalService) {
    var that = this;
    $scope.formLote = {};

    $scope.createLote = function () {
        loteService.createLote($scope.formLote, function () {
            $scope.formLote = {};
            generalService.generateNoty("Se agreg&oacute correctamente el lote", "success");
        });
    };

    $scope.genericFormatter = function (value, row, index) {
        return value ? "S&iacute" : "No";
    };

    $scope.listaLotes = function () {
        loteService.getLotes(function (data) {
            $scope.lotes = data;
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
});
