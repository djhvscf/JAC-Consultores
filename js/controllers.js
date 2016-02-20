var jacconsultoresControllers = angular.module('jacconsultoresControllers', []);

jacconsultoresControllers.controller('propiedadCtrl', function ($scope, $http) {
    var that = this;

    $scope.formPropiedad = {};

    $scope.isCondominio = true;
    $scope.isCasaResindencial = false;

    $scope.hideControls = function (name) {
        $scope.isCondominio = name === "casa" ? false : true;
        $scope.isCasaResindencial = name === "casa" ? true : false;
    };

    /**
     * Condominos
     */
    $http.get('/api/condominios')
        .success(function(data) {
            $scope.condominios = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createCondominio = function(){
        $http.post('/api/condominios', {nombre: "Tramonto"})
            .success(function(data) {
                $scope.formData = {};
                $scope.condominios = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    //$scope.createCondominio();
    /**
     * Condominos
     */

    /**
     * Propiedades
     */

    /*$http.get('/api/propiedad')
        .success(function(data) {
            $scope.propiedades = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });*/

    $scope.createPropiedad= function(){
        $http.post('/api/propiedad', $scope.formPropiedad)
            .success(function(data) {
                $scope.formPropiedad = {};
                $scope.propiedades = data;
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
    /**
     * Propiedades
     */
});

jacconsultoresControllers.controller('loteCtrl', function ($scope, $http) {
    var that = this;
    $scope.formData = {text: "str"};

    // Cuando se cargue la página, pide del API todos los TODOs
    $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Cuando se añade un nuevo TODO, manda el texto a la API
    $scope.createTodo = function(){
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    // Borra un TODO despues de checkearlo como acabado
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
});

jacconsultoresControllers.controller('clienteCtrl', function ($scope) {
    var that = this;
});