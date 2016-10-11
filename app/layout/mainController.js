/*
 * For the mainController of the webapp in the index.html page
 */

angular.module('monitorApp').controller('mainController', mainController);

mainController.$inject = [ 'dataFactory', 'ngToast', '$rootScope', '$scope', '$http', '$document'];

function mainController(dataFactory, ngToast, $rootScope, $scope, $http, $document) {
	console.log("Logging mainController");
	var vm = this;
	
	$rootScope.fgg = "Aastha Poddar!!";

	vm.showDisabledScreen = false;
	var bodyElement = $document.find('body');

	vm.show1 = true;

	$scope.no = 1;
	$scope.increment = function increment(show1) {
		$scope.no = $scope.no + 1;
		$rootScope.fgg="aastha2";
		vm.show1 = !show1;
		

	}


	
	$rootScope.$on('cfpLoadingBar:started', function(event, data) {
		bodyElement.addClass('cover-full');
		vm.showDisabledScreen = true;
	});

	$rootScope.$on('cfpLoadingBar:completed', function(event, data) {
		bodyElement.removeClass('cover-full');
		vm.showDisabledScreen = false;
	});
	
}