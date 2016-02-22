jacconsultoresServices.factory('loteService', ['$http', function($http) {

    var URL_BASE = "/api/lote";

    return {
        createLote: createLote,
        getLotes: getLotes
    };

    function createLote (lote, callback) {
        $http.post(URL_BASE, lote)
            .success(callback)
            .error(function(data) {
                console.log('Error:' + data);
            });
    }

    function getLotes (callback) {
        $http.get(URL_BASE)
            .success(callback)
            .error(function(data) {
                console.log("Error:" + data)
            });
    }
}]);
