$(document).ready(function () {

	getRandomQuote();

	function getRandomQuote() {
		$.ajax({
			url: "https://api.forismatic.com/api/1.0/?",
			dataType: "jsonp",
			data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
			success: function(response) {
				console.log('response=>', response);
				$('.quote').html('<i class="fa fa-quote-left"></i> ' + response.quoteText);
				$('.quoteAuthor').html('- ' + response.quoteAuthor);
			}
		});
	}

	$('#btnRandomQuote').click(function () {
		console.log('btnRandomQuote clicked=>');
		getRandomQuote();
	});

});