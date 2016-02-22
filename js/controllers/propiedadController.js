jacconsultoresControllers.controller('propiedadCtrl', function ($scope, $http, propiedadService, condominioService, generalService) {
    var that = this;

    $scope.formPropiedad = {};
    $scope.condominios = [];
    $scope.selectedCondominio = null;

    $scope.isCondominio = true;
    $scope.isCasaResindencial = false;

    $scope.hideControls = function (name) {
        $scope.isCondominio = name === "casa" ? false : true;
        $scope.isCasaResindencial = name === "casa" ? true : false;
    };

    $scope.createPropiedad = function () {
        if (this.ingPropiedad.$valid && $scope.selectedCondominio !== null) {
            $scope.formPropiedad.idCondominio = $scope.selectedCondominio._id;
            propiedadService.createPropiedad($scope.formPropiedad, function () {
                $scope.formPropiedad = {};
                generalService.generateNoty("Se agreg&oacute correctamente la propiedad", "success");
            });
        } else {
            generalService.generateNoty("Error. Llene los campos requeridos antes de crear la propiedad!", "error");
        }
    };

    $scope.deletePropiedad = function (idPropiedad) {
        propiedadService.deletePropiedad(idPropiedad, function () {
            generalService.generateNoty("Se elimin&oacute correctamente la propiedad", "success");
        });
    };

    $scope.listaPropiedades = function (isSearch) {
        propiedadService.getPropiedades(function (data) {
            $scope.propiedades = data;
            if (isSearch) {
                $("#table").bootstrapTable("refreshOptions", {data: data});
            } else {
                $('#table').bootstrapTable({
                    data: data,
                    undefinedText: "",
                    search: true,
                    locale: "es-CR",
                    showColumns: true,
                    idField: "id",
                    toolbar: "#toolbar",
                    columns: [{
                        field: '_id',
                        title: 'Id',
                        visible: false
                    }, {
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
                    }, {
                        field: 'operate',
                        title: 'Eliminar',
                        align: 'center',
                        events: window.operateEvents,
                        formatter: $scope.operateFormatter
                    }]
                });
            }
        });
    };

    $scope.getCondominios = function (isAgregarPropiedad) {
        condominioService.getCondominios(function (data) {
            if (!isAgregarPropiedad) {
                data.unshift({
                    _id: "-1",
                    nombre: "Todos"
                });
            }
            $scope.selectedCondominio = data[0];
            $scope.condominios = data;
        });
    };

    $scope.onCondominioChange = function() {
        if($scope.selectedCondominio) {
            if($scope.selectedCondominio._id !== "-1") {
                propiedadService.getPropiedadByCondominio($scope.selectedCondominio._id, function (data) {
                    $("#table").bootstrapTable("refreshOptions", {data: data});
                });
            } else {
                $scope.listaPropiedades(true);
            }
        }
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
            generalService.generateNoty("Desea eliminar la propiedad?", "confirm", function ($noty) {
                $("#table").bootstrapTable('remove', {
                    field: '_id',
                    values: [row._id]
                });

                $scope.deletePropiedad(row._id);
                $noty.close();
            });
        }
    };
});