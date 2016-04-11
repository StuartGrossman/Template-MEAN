(function(){
	'use strict'
	angular.module('app').controller('MovieController', MovieController);
	MovieController.$inject = ['$state'];

	function MovieController($state){
		var vm = this;
		
		console.log('MovieController has Loaded')
		
		vm.findMovie = function(){
			console.log(vm.movie)
		}
	}

})()