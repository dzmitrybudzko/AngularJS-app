
/*  Controllers */

var myApp = angular.module('gardenControllers', []);

myApp.controller('gardenListCtrl', ['$scope', 'fetchDataFactory', 
	function ($scope, fetchDataFactory) {

		$scope.products = fetchDataFactory.getProducts();
}]);


myApp.controller('gardenDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    
    $http.get('database.json')
    
    .success(function(data) {
      $scope.products = data;
      $scope.gardenId = $routeParams.productId;
    });

  }]);


myApp.controller('sortingCtrl', ['$scope', '$filter', 
  function($scope, $filter) {
	
	this.countries = ['Germany', 'Japan', 'Sweden', 'Italy', 'China'];

	this.categories = [{cat: 'd1', name: 'Mowers'}, 
		{cat: 'd2', name: 'Saws'}, {cat: 'd3', name: 'Trimmers'}, 
		{cat: 'd4', name: 'Cutters'}, {cat: 'd5', name: 'Tools'}];
	
	this.search = {};
	this.price = {from : 30, to : 1300};

	this.dataOpts = { m1 : null,
					opts : [{name: "first cheap", val: 'price'}, 
					{name: "first expensive", val: '-price'}, 
					{name: "by category", val: 'dataId'},
					{name: "by brand", val: 'title'},]
				};

	this.sortProducts = function(field) {
      	$scope.products = $filter('orderBy')($scope.products, field);
    };

}]);


myApp.controller('gardenAdvCtrl', ['$scope', '$timeout', 'fetchDataFactory',
  function($scope, $timeout, fetchDataFactory) {
  	
  	var me = this;
	function startAnimation() {
			
		$scope.products = fetchDataFactory.getProducts();
		
		me.saleProducts = [];
		for (var i = 0; i < $scope.products.length; i = i + 3) {
			me.saleProducts.push($scope.products[i])
		};
		
		var total = me.saleProducts.length;
		var self = me;
		me.indx = 0;

		me.animation = function() {
			
       		$timeout(function(){
       			if (total > 0) {
   	    	  		self.indx = (self.indx === total - 1) ? 0 : self.indx + 1;	
	       		};
				self.animation();
       		}, 4000);
	 	};

	 	me.animation();
	};

	 $timeout(function(){
	 	startAnimation();
	 }, 500);

}]);


myApp.controller('buyCtrl', ['$scope', '$http', function($scope, $http) {
	
	$(document).ready(function(){

		$( ".buyaction" ).click(function(){
	
			$.ajax({
				  method: "POST",
				  url: "bought-items",
				  data: { id: $scope.gardenId }
				})
				    .then(
				    	function(response) {
				    		$("#result").html(response);
    						alert( "success with POST" );
  						},
  						function() {
  							alert( "error with POST" );
  						})
			  	
			//alert("Buy!!!");
		});

	});	

}]);

