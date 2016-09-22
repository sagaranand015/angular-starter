angular.module('monitorApp').controller('stModalController', stModalController);

stModalController.$inject = ['$scope', '$uibModalInstance', 'protect', 'access', 'dataFactory', 'ngToast', 'context'];

function stModalController($scope, $uibModalInstance, protect, access, dataFactory, ngToast, context) {
	console.log("Logging STModalController");
	var vm = this;

	console.log("Protect: " + protect.enabled);
	console.log("Access: " + access.enabled);
	
	if(protect.enabled) {
		$scope.request = protect;
	} else {
		$scope.request = access;
	}
	
	/**
	 * For checking the individual ST node
	 */
	$scope.checkStNode = function checkStNode(request) {
		
		console.log(request);
		
		if(request == null) {
			ngToast.create({
				className: 'danger',
				content: 'Oops! Internal Error occured. Please try again. The Request is null here'
			});
			return;
		}
		dataFactory.checkStNode(context, request).then(function(response) {
			ngToast.create({
				className: 'success',
				content: request.nodeName + ' returned ' + response.status + ' status'
			});
		}, function(response) {
			ngToast.create({
				className: 'danger',
				content: request.nodeName + ' returned ' + response.status + ' status'
			});
		});
	};
	
	$scope.cancel = function cancel() {
		$uibModalInstance.dismiss('cancel');
	}
}