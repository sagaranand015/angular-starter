angular.module('monitorApp').controller('pieModalController', pieModalController);

pieModalController.$inject = ['$scope', '$uibModalInstance', 'pieContent', 'pieRequest', 'dataFactory', 'ngToast', 'context'];

function pieModalController($scope, $uibModalInstance, pieContent, pieRequest, dataFactory, ngToast, context) {
	console.log("Logging Modal Controller");
	var vm = this;

	$scope.pie = pieContent;
	$scope.pieNodes = pieRequest;
	
	$scope.cancel = function cancel() {
		$uibModalInstance.dismiss('cancel');
	}

	$scope.checkPieNode = function(pieNode) {
		dataFactory.checkPieEncNode(context, pieNode).then(function(response) {  // success handler
			ngToast.create({
				className: 'success',
				content: pieNode.nodeName + ' returned ' + response.status + ' status'
			});
		}, function(response) {   // error handler
			ngToast.create({
				className: 'danger',
				content: pieNode.nodeName + ' returned ' + response.status + ' status'
			});
		});
	}
}