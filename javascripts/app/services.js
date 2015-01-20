var siteServices = angular.module('siteServices', ['ngResource']);

siteServices.factory('Provider', ['$resource',
    function($resource){
        return $resource('providers/:providerId.json', {}, {
            query: {method:'GET', params:{providerId:'phones'}, isArray:true}
        });
    }]);