angular.module('myApp')
.service('instaService', instaFunc);


function instaFunc($http, $q){
	this.getInstaFeed= function(token){
		var deferred = $q.defer();
		var URL = 'https://api.instagram.com/v1/users/self/media/recent?access_token='+token+'&callback=JSON_CALLBACK';

		// empty array that will hold objects of 45 picture objects, or however many
		var userMedia = [];

		// first function call
		eachRequest(URL);

		function eachRequest(URL){
			$http({
				method: 'JSONP',
				url: URL
			}).then(function(response){
				alert('working??');
				alert('what');
				// console.log(response);
				// console.log(response.data);
				// console.log(response.data.data);
				var parsedData = response.data.data;
				for(var i=0; i<parsedData.length; i++){
					userMedia.push(parsedData[i]);
				}
				alert(userMedia);
				if(parsedData.length!==20){
					deferred.resolve(userMedia);
				}
				else{
					// recursion each following time
					eachRequest(response.data.pagination.next_url);
				}
				// console.log(parsedData);
				// console.log('length is'+parsedData.data.length);
			});
			return deferred.promise;
		}
	};
}