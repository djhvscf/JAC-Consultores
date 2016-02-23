jacconsultoresControllers.controller('residencialCtrl', function ($scope, $http, residencialService, generalService) {
    $scope.formResidencial = {};

    $scope.createResidencial = function(){
        if (this.ingResidencial.$valid) {
            residencialService.createResidencial($scope.formResidencial, function (data) {
                $scope.formResidencial = {};
                generalService.generateNoty("Se agreg&oacute correctamente el residencial", "success");
            });
        } else {
            generalService.generateNoty("Error. Llene los campos requeridos antes de crear el residencial!", "error");
        }
    };

    $scope.deleteResidencial = function (idResidencial) {
        residencialService.deleteResidencial(idResidencial, function () {
            generalService.generateNoty("Se elimin&oacute correctamente el residencial", "success");
        });
    };

    $scope.listaResidenciales = function () {
        residencialService.getResidenciales(function (data) {
            $scope.Residenciales = data;
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
                    field: 'nombre',
                    title: 'Nombre',
                    sortable: true
                }, {
                    field: 'direccion',
                    title: 'Direcci&oacuten'
                }, {
                    field: 'telefono',
                    title: 'Tel&eacutefono'
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

    $scope.operateFormatter = function (value, row, index) {
        return [
            '<a class="remove" href="javascript:void(0)" title="Remove">',
            '<i class="glyphicon glyphicon-remove"></i>',
            '</a>'
        ].join('');
    };

    window.operateEvents = {
        'click .remove': function (e, value, row, index) {
            generalService.generateNoty("Desea eliminar el residencial?", "confirm", function ($noty) {
                $("#table").bootstrapTable('remove', {
                    field: '_id',
                    values: [row._id]
                });

                $scope.deleteResidencial(row._id);
                $noty.close();
            });
        }
    };
});