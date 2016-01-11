	
/* Services */

var myApp = angular.module('gardenServices', []);

myApp.factory('fetchDataFactory', function($http) {

  var factObj = {};

  factObj.getProducts = function() {
    $http.get("database.json")
	   
	   .success(function(data) {
	     factObj.products = data;
	     //console.log("data loaded");
	   })

	   .error(function(data, status){
	     console.log(data);
	   })

	return factObj.products;
  };

  return factObj;
});