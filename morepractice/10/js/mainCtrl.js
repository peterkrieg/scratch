angular.module('myApp').controller('mainCtrl', controllerFunc);

function controllerFunc($scope, $anchorScroll, $location, $http){

	// $scope.scrollDown = function(){
	// 	$location.hash("circle");
	// 	$anchorScroll();

	// };
	//___________________________________________________

	$scope.showUser = null;

	$scope.getGithub = function(){
		$http.get("https://api.github.com/users/"+$scope.githubUsername).then(
			onSuccess, onFailure);
	};

	function onSuccess(response){
		$scope.userObj = response.data;
		$scope.showUser = true;
	}

	function onFailure(){
		alert('failure');
	}


	//_________________________For multiple users__________________________

	$scope.getLotsUsers = function(){
		var usernames= ['lukeschunk', 'peterkrieg', 'peter', 'joe', 'jrobber', 'romines', 'adam', 'bill', 'jack', 'roger'];
		var users = [];
		for(var i=0; i<usernames.length; i++){
			$http.get("https://api.github.com/users/"+usernames[i]).then(
				onSuccess2, onFailure2);
		}

		function onSuccess2(response){
			var userObj = response.data;
			if(userObj.blog){
				userObj.showLink = "<a href='"+userObj.blog+"'>Link</a>";
			}
			else{
				userObj.showLink = 'no link sorry :(';
			}
			users.push(userObj);


			$scope.users = users;
		}
		function onFailure2(){
			alert('failure');
		}
		$scope.showUsers = true;


	};


















}