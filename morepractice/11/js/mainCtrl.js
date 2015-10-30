angular.module('myApp')
	.controller('mainCtrl', ctrlFunc);

	function ctrlFunc($scope, instaService){
		var homeURL = 'http://peterkrieg.com/insta';
		$scope.getData = function(){
			var url = window.location.href.toString();
			var token = url.split('#access_token=')[1];
			alert(token);
			// alert(typeof token);
			// window.history.pushState({}, 'Title', 'http://peterkrieg.com/insta');
			// alert('changed URL?');
			// alert(window.location.href.toString());


			// if(window.location.href.toString()!==homeURL){
			// 	window.location.href=homeURL;
			// 	alert('back at home page');
			// }
			
			// alert('back at insta home page');
			// alert(token);
			return token;
		};
		var token = $scope.getData();

		var userMedia = [];

		instaService.getInstaFeed(token).then(function(dataObj){
			console.log(dataObj);
			for(var i=0; i<dataObj.data.length; i++){
				userMedia.push(dataObj.data[i]);
			}
			// userMedia.push(dataObj.data);
			console.log(userMedia);
		});






		$scope.message = 'hello';




	}