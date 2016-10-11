/*
 * For the mainController of the webapp in the index.html page
 */

angular.module('monitorApp').controller('headerController', headerController);

headerController.$inject = [ 'dataFactory', 'ngToast', '$rootScope', '$scope', '$http', '$document'];

function headerController(dataFactory, ngToast, $rootScope, $scope, $http, $document) {
	console.log("Logging headingController");
	var vm = this;

	$scope.fgg=$rootScope.fgg;


		

	}
	
	
	
