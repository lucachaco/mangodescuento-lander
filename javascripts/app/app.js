'use strict';

/* App Module */

var mangoDescuentoApp = angular.module('mangoDescuentoApp', [
    'ngRoute',
    'siteControllers',
    'siteServices'
]);


/*
 angularApp.config(['$routeProvider',
 function ($routeProvider) {
 $routeProvider.
 when('/saison', {
 templateUrl: '/assets/app/partials/simple-corners.html',
 controller: 'TheSeasonsCtrl'
 }).

 otherwise({
 redirectTo: '/saison'
 });
 }]);


 angularApp.run(['$rootScope', function ($rootScope) {



 }]);
 */
