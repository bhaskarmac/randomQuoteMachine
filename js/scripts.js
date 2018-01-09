$(document).ready(function () {

	getRandomQuote();

	function getRandomQuote() {
		$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(quoteData) {
			console.log('quoteData=>', quoteData);
			$('.quote').html(quoteData[0].content);
		});
	}

});