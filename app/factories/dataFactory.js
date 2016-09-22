angular.module('monitorApp').factory('dataFactory', [ '$http', '$q', function($http, $q) {

	// the base URL for all the endpoints
	var baseUrl = "monitor";
	var prodEnv = "/prod";
	var qaEnv = "/qa";
	var devEnv = "/dev";
	
	var promiseArray = [];
	var fesRequest = {};
	var pieRequest = {};
	
	// all the HTTP Request functions for reading from Remote hosts
	var dataFactory = {};
	
	// to get the Prod data from the remote JSON file
	dataFactory.getRequestData = function(targetLink) {
		return $http.get(targetLink);
	}
	
	// to check the individual FES nodes as received from request
	dataFactory.checkFesNode = function(targetLink) {
		return $http.get(targetLink);
	}
	
	return dataFactory;

}]);