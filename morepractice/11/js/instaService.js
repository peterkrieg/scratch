angular.module('myApp')
.service('instaService', instaFunc);

function instaFunc($http, $q){

	this.getInstaFeed= function(token){
		this.callbackFunction = function(content){
			return content;
		};
		var deferred = $q.defer();
		// var URL = 'https://api.instagram.com/v1/users/self/feed?access_token='+token+'&callback=JSON_CALLBACK';
		var URL = 'https://api.instagram.com/v1/users/self/media/recent?access_token='+token+'&callback=JSON_CALLBACK';

		// var URL = 'https://api.instagram.com/v1/users/self/feed?access_token='+token+'&callback=callbackFunction';
		$http({
			method: 'JSONP',
			// dataType: 'JSONP',
			url: URL
		}).then(function(response){
			alert('working??');
			var parsedData = response.data;
			deferred.resolve(parsedData);
		});
		return deferred.promise;
	};

	this.callbackFunction = function(content){
		return content;
	};

}