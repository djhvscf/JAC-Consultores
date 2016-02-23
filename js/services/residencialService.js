jacconsultoresServices.factory('residencialService', ['$http', function($http) {
    var URL_BASE = "/api/residencial";

    return {
        createResidencial: createResidencial,
        getResidenciales: getResidenciales,
        deleteResidencial: deleteResidencial
    };

    function createResidencial (residencial, callback) {
        $http.post(URL_BASE, residencial)
            .success(callback)
            .error(function(data) {
                console.log('Error:' + data);
            });
    }

    function getResidenciales (callback) {
        $http.get(URL_BASE)
            .success(callback)
            .error(function(data) {
                console.log("Error:" + data)
            });
    }

    function deleteResidencial (idResidencial, callback) {
        $http.delete(URL_BASE + "/" + idResidencial)
            .success(callback)
            .error(function(data) {
                console.log("Error:" + data)
            });
    }
}]);
