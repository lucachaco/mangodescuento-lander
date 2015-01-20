'use strict';
var siteControllers = angular.module('siteControllers', []);

siteControllers.controller('DiscountsCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/phones.json').success(function (data) {
        $scope.phones = data;
    });

}]);
