angular.module('monitorApp').controller('pieController', pieController);

pieController.$inject = [ '$scope', 'dataFactory', '$rootScope', 'ngToast',
		'utilityService', '$window', '$uibModal' ];

function pieController($scope, dataFactory, $rootScope, ngToast,
		utilityService, $window, $uibModal) {
	console.log("Logging pieController");
	var vm = this;

	// for fes payloads
	$scope.fesContent = {};
	$scope.fesContent.nodeName = [];
	$scope.fesContent.endpoint = "";

	vm.initEncryptDecrypt = function initEncryptDecrypt() {

		vm.pathContext = $scope.pathContext;

		/**
		 * Get the pie encryption machines and related endpoints from pre-made
		 * json
		 */
		vm.prodMachines = dataFactory
				.getRequestData("resources/prod-servers.json")
				.then(
						function(response) { // success handler
							var fesData = response.data.fes;
							console.log(fesData);
							if (fesData != null) {
								angular.forEach(fesData.nodes, function(v, k) {
									$scope.fesContent.nodeName[k] = v;
								});
							} else {
								ngToast
										.create({
											className : 'danger',
											content : 'Could not fin any Prod machines and Request Content. Please try again.'
										});
							}
						},
						function(response) { // error handler
							ngToast
									.create({
										className : 'danger',
										content : 'Could not load any Prod machines and Request Content. Please try again.'
									});
						});
	}; // end of initEncryptDecrypt

	/**
	 * get the status of the FES nodes in production
	 */
	$scope.checkProdFesNodes = function checkProdFesNodes(url) {
		dataFactory.checkFesNode("http://" + url).then(
			function(response) {
				ngToast.create({
					className : 'success',
					content : url + ' returned ' + response.status
							+ " status"
				});
			},
			function(response) {
				ngToast.create({
					className : 'danger',
					content : url + ' returned ' + response.status
							+ " status"
				});
			});
	}; // end of checkProdFesNodes()

	// this is required for loading the init function
	$scope.$on('$viewContentLoaded', function($evt, data) {
		vm.initEncryptDecrypt();
	});

}
