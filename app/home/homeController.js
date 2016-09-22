angular
	.module('monitorApp')
	.controller('homeController', homeController);

	function homeController() {
		console.log("Logging homeController");
		var vm = this;
	}