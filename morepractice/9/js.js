var myApp = angular.module('myApp', []);




myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.description = 'My name is I am 22 and enjoy outdoors';
	$scope.message = 'hello world!! this is angular message';

	var peter = {
		firstName: 'peter',
		lastName: 'krieg',
		age: 22
	};

	var jess = {
		firstName: 'jessica',
		lastName: 'smith'
	};

	var sam = {
		firstName: 'sam',
		lastName: 'jennings'
	};

	var people = [peter, jess, sam];

	var animal = {
		name: 'tiger',
		age: 15
	};

	function doSomething(){
		alert('hello');
	}



function onUserComplete(response){
		alert('hi');
		alert(response);
		$scope.user = response.data;
		console.log(user);
	}

	function onError(reason){
		$scope.error = "could not fetch user";
	}


	function getPic(){
		alert('hello hello');
		alert($scope.githubUsername);

		// $http.get('https://api.github.com/users/peterkrieg').then(function(response){
		// 	alert('what');
		// 	alert(response);
		// });
		alert('done');
			$http.get("https://api.github.com/users/"+$scope.githubUsername)
				.then(onUserComplete, onError);
	}

	

	$scope.peter = peter;
	$scope.people = people;
	$scope.animal = animal;	
	$scope.doSomething = doSomething;

	$scope.getPic = getPic;



	// $scope.username = 'peterkrieg';  // a default username to give








}]);