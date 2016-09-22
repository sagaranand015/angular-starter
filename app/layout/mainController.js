/*
 * For the mainController of the webapp in the index.html page
 */

angular.module('monitorApp').controller('mainController', mainController);

mainController.$inject = [ 'dataFactory', 'ngToast', '$rootScope', '$scope', '$http', '$document'];

function mainController(dataFactory, ngToast, $rootScope, $scope, $http, $document) {
	console.log("Logging mainController");
	var vm = this;
	
	vm.showDisabledScreen = false;
	var bodyElement = $document.find('body');
	
	$rootScope.$on('cfpLoadingBar:started', function(event, data) {
		bodyElement.addClass('cover-full');
		vm.showDisabledScreen = true;
	});

	$rootScope.$on('cfpLoadingBar:completed', function(event, data) {
		bodyElement.removeClass('cover-full');
		vm.showDisabledScreen = false;
	});
	
}