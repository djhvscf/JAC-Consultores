jacconsultoresControllers.controller('loteCtrl', function ($scope, $http, loteService, generalService) {
    var that = this;
    $scope.formLote = {};

    $scope.createLote = function () {
        if (this.ingLote.$valid) {
            loteService.createLote($scope.formLote, function () {
                $scope.formLote = {};
                generalService.generateNoty("Se agreg&oacute correctamente el lote", "success");
            });
        } else {
            generalService.generateNoty("Error. Llene los campos requeridos antes de crear el lote!", "error");
        }
    };

    $scope.deleteLote = function (idLote) {
        loteService.deleteLote(idLote, function () {
            generalService.generateNoty("Se elimin&oacute correctamente el lote", "success");
        });
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
                        field: '_id',
                        title: 'Id',
                        visible: false
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
                    }, {
                        field: 'operate',
                        title: 'Eliminar',
                        align: 'center',
                        events: window.operateEvents,
                        formatter: $scope.operateFormatter
                    }]
                });
        });
    };


    $scope.genericFormatter = function (value, row, index) {
        return value ? "S&iacute" : "No";
    };

    $scope.operateFormatter = function (value, row, index) {
        return [
            '<a class="remove" href="javascript:void(0)" title="Remove">',
            '<i class="glyphicon glyphicon-remove"></i>',
            '</a>'
        ].join('');
    };

    window.operateEvents = {
        'click .remove': function (e, value, row, index) {
            generalService.generateNoty("Desea eliminar el lote?", "confirm", function ($noty) {
                $("#table").bootstrapTable('remove', {
                    field: '_id',
                    values: [row._id]
                });

                $scope.deleteLote(row._id);
                $noty.close();
            });
        }
    };
});
