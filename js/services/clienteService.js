jacconsultoresServices.factory('clienteService', ['$http', function($http) {
    var URL_BASE = "/api/cliente";

    return {
        createCliente: createCliente,
        getClientes: getClientes
    };

    function createCliente (cliente, callback) {
        $http.post(URL_BASE, cliente)
            .success(callback)
            .error(function(data) {
                console.log('Error:' + data);
            });
    }

    function getClientes (callback) {
        $http.get(URL_BASE)
            .success(callback)
            .error(function(data) {
                console.log("Error:" + data)
            });
    }
}]);

