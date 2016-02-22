var jacconsultoresServices = angular.module('jacconsultoresServices', [])
    .factory('generalService', function() {

        return {
            generateNoty: function(text, type, callback) {
                noty({
                    text: text,
                    type: type,
                    maxVisible: 1,
                    timeout: 3000,
                    killer: true,
                    layout: type === "confirm" ? "center" : 'bottomRight',
                    modal: type === "confirm",
                    buttons: type === "confirm" ? [
                        {addClass: 'btn btn-primary', text: 'Eliminar', onClick: callback },
                        {addClass: 'btn btn-danger', text: 'Cancelar', onClick: function($noty) {
                            $noty.close();
                        }
                        }
                    ] : false
                });
            }
        };
    });