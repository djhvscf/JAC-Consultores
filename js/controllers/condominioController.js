jacconsultoresControllers.controller('condominioCtrl', function ($scope, $http, condominioService, generalService) {
    $scope.formCondominio = {};

    $scope.createCondominio = function(){
        if (this.ingCondominio.$valid) {
            condominioService.createCondominio($scope.formCondominio, function (data) {
                $scope.formCondominio = {};
                generalService.generateNoty("Se agreg&oacute correctamente el condominio", "success");
            });
        } else {
            generalService.generateNoty("Error. Llene los campos requeridos antes de crear el condominio!", "error");
        }
    };

    $scope.deleteCondominio = function (idCondominio) {
        condominioService.deleteCondominio(idCondominio, function () {
            generalService.generateNoty("Se elimin&oacute correctamente el condominio", "success");
        });
    };

    $scope.listaCondominios = function () {
        condominioService.getCondominios(function (data) {
            $scope.condominios = data;
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
            generalService.generateNoty("Desea eliminar el condominio?", "confirm", function ($noty) {
                $("#table").bootstrapTable('remove', {
                    field: '_id',
                    values: [row._id]
                });

                $scope.deleteCondominio(row._id);
                $noty.close();
            });
        }
    };
});