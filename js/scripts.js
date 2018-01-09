$(document).ready(function () {

	getRandomQuote();

	function getRandomQuote() {
		$.ajax({
			url: "https://api.forismatic.com/api/1.0/?",
			dataType: "jsonp",
			data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
			success: function(response) {
				console.log('response=>', response);
			}
		});
		
	}

	$('#btnRandomQuote').click(function () {
		console.log('btnRandomQuote clicked=>');
		getRandomQuote();
	});

});