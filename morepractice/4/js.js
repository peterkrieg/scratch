var button = $('button.location');

button.on('click', function(e){
	navigator.geolocation.getCurrentPosition(success, fail);
	$('.status').text('Loading location.. please be patient!!');
});

function success(position){
	$('.status').after('<p>Latitude: ' + position.coords.latitude);
	$('.status').after('<p>longitude: ' + position.coords.longitude);
	$('.status').after('<p>Altitude: ' + position.coords.altitude);
	$('.status').remove();
}

function fail(msg) {
	console.log(msg.code);
	console.log('there is an error: ' +msg);
}

// Trying out history object

$('button.history').on('click', function(e){
	history.back();
});