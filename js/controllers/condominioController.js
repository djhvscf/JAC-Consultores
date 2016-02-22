jacconsultoresControllers.controller('condominioCtrl', function ($scope, $http, condominioService, generalService) {
    $scope.formCondominio = {};

    $scope.createCondominio = function(){
        condominioService.createCondominio($scope.formCondominio, function(data) {
            $scope.formCondominio = {};
            generalService.generateNoty("Se agreg&oacute correctamente el condominio", "success");
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
                    field: 'nombre',
                    title: 'Nombre',
                    sortable: true
                }, {
                    field: 'direccion',
                    title: 'Direcci&oacuten'
                }, {
                    field: 'telefono',
                    title: 'Tel&eacutefono'
                }]
            });
        });
    };
});