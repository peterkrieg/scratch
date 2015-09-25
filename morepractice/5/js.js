
// function Form($scope){
// 	$scope.name = 'Peter Krieg';
// 	$scope.age = 22;
// 	$scope.alive = true;


var myApp = angular.module('myApp', []);


myApp.controller('AnotherForm', ['$scope', function($scope) {
	$scope.description = 'My name is I am 22 and enjoy outdoors';
}]);


