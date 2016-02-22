jacconsultoresServices.factory('condominioService', ['$http', function($http) {
    var URL_BASE = "/api/condominio";

    return {
        createCondominio: createCondominio,
        getCondominios: getCondominios
    };

    function createCondominio (condominio, callback) {
        $http.post(URL_BASE, condominio)
            .success(callback)
            .error(function(data) {
                console.log('Error:' + data);
            });
    }

    function getCondominios (callback) {
        $http.get(URL_BASE)
            .success(callback)
            .error(function(data) {
                console.log("Error:" + data)
            });
    }
}]);
