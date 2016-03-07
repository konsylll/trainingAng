var myApp = angular.module("myApp", []);

myApp.value('Values',function(){
	this.returnX = function(x){
		return x;
	}
	return 2;
});

myApp.controller('MyController', function($scope, Values){
	$scope.two = Values;
});