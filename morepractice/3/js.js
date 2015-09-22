// Javascript practicing with basic AJAX.  

var listItem = $('li');

listItem.on('click', function(e){
	e.preventDefault();
	var url = $(this).prop('data-link');

	$('li.current').removeClass('current');
	$(this).addClass('current');

	$('div.container').empty();
	$('div.container').load(url + ' div.content').hide().fadeIn(1500);
});
