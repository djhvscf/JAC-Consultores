jacconsultoresServices.factory('propiedadService', ['$http', function($http) {

    var URL_BASE = "/api/propiedad";

    return {
        createPropiedad: createPropiedad,
        getPropiedades: getPropiedades,
        deletePropiedad: deletePropiedad
    };

    function createPropiedad (propiedad, callback) {
        $http.post(URL_BASE, propiedad)
            .success(callback)
            .error(function(data) {
                console.log('Error:' + data);
            });
    }

    function getPropiedades (callback) {
        $http.get(URL_BASE)
            .success(callback)
            .error(function(data) {
                console.log("Error:" + data)
            });
    }

    function deletePropiedad (idPropiedad, callback) {
        $http.delete(URL_BASE + "/" + idPropiedad)
            .success(callback)
            .error(function(data) {
                console.log("Error:" + data)
            });
    }
}]);