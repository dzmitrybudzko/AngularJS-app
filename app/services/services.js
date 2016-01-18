	
/* Services */

var myApp = angular.module('gardenServices', []);

myApp.factory('fetchDataFactory', function($http, $q) {

  var factObj = {};

   factObj.getProducts = function() {

   var deferred = $q.defer();

    $http.get("database.json")
    .success(function(data) {
      deferred.resolve(data)
    })

    .error(function(data, status){
      console.log(data);
    })

 	return deferred.promise;
  };

  return factObj;
});