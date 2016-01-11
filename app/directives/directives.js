
/* Directives */

var myApp = angular.module('gardenDirectives', []);

myApp.directive('adv', function() {
  return {
    restrict: 'AE',
    templateUrl: "app/partials/page-adv.html"

  }
});


myApp.directive('buyBlock', function() {
  return {
    restrict: "AC",
    template: "<div>" + 
            		"<button class='btn btn-success btn-lg buyaction'>Buy now</button>" + 
                	"<div id='result'></div>" + 
    		  "</div>",
    controller: "buyCtrl"
  }
})


myApp.directive('productCard', function() {
  return {
    restrict: "E",
    templateUrl: "app/partials/product-card.html",
    scope: {
      product: "=productAttr"
    }
  }
})