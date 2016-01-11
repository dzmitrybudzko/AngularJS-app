'use strict';
 
 /* App Module */

var gardenApp = angular.module('gardenApp', [
  'ngRoute',
  'ngAnimate',
  'gardenControllers',
  'gardenDirectives',
  'gardenServices'
]);

/*  Route */

gardenApp.config(['$routeProvider',
  function($routeProvider) {
    
    $routeProvider.

      when('/products', {
       templateUrl: 'app/partials/product-list.html',
        controller: 'gardenListCtrl'
      }).
    
      when('/products/:productId', {
       templateUrl: 'app/partials/product-detail.html',
        controller: 'gardenDetailCtrl'
      }).

      when('/delivery', {
       templateUrl: 'app/partials/delivery.html'
      }).

      when('/credit', {
       templateUrl: 'app/partials/credit.html'
      }).

      when('/payment', {
       templateUrl: 'app/partials/payment.html'
      }).

      when('/contacts', {
       templateUrl: 'app/partials/contacts.html'
      }).
    
      otherwise({
        redirectTo: '/products'
      });

  }]);

