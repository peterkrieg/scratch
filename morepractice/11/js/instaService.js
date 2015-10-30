angular.module('myApp')
.service('instaService', instaFunc);

function instaFunc($http, $q){
	this.getInstaFeed= function(token){
		var deferred = $q.defer();
		var URL = 'https://api.instagram.com/v1/users/self/media/recent?access_token='+token+'&callback=JSON_CALLBACK';
		$http({
			method: 'JSONP',
			url: URL
		}).then(function(response){
			alert('working??');
			// console.log(response);
			// console.log(response.data);
			// console.log(response.data.data);
			var parsedData = response.data;
			deferred.resolve(parsedData);
		});
		return deferred.promise;
	};
}