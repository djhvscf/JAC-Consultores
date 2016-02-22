var jacconsultoresServices = angular.module('jacconsultoresServices', [])
    .factory('generalService', function() {

        return {
            generateNoty: function(text, type) {
                noty({
                    text        : text,
                    type        : type,
                    maxVisible  : 1,
                    timeout		: 3000,
                    killer		: true,
                    layout      : 'bottomRight'
                });
            }
        };
    });