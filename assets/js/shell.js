//can't follow what we're (not) said to do, can we? :high-five:

var d_id  = 'thewisenerd';

function get_disqus_shortname() {
    return d_id;
}

$(function()
    {
        if ( $("#currentquote").size() ) {
            newquote();
        }
    }
);

function gentlyEncode(e) {
    return encodeURIComponent ? encodeURIComponent(e).replace(/%20(\D)?/g, "+$1").replace(/'/g, escape("'")) : escape(e).replace(/\+/g, "%2B").replace(/%20/g, "+")
}

function randifyer(text) {
	var value= $.ajax({
		url: "http://api.bitly.com/v3/shorten?format=json&login=vineethraj49&apiKey=R_d735d99f254d20a4c181dced8f357c51&domain=bit.ly&longUrl=" + gentlyEncode(text),
		async: false
	}).responseText;

	obj = JSON.parse(value);
	console.log(obj.data.url);
	return obj.data.url;
}

function linkify(text) {
	var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	var twitPicRegex=/(\b(pic.twitter.com)\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	return text.replace(urlRegex, function(url) {
		var short_url = randifyer(url);
		return '<a target="_blank" href="' + short_url + '">' + short_url + '</a>';
	}).replace(twitPicRegex, function(url) {
		var arr = url.split("/");
		var twitUrl = "http://t.co/" + arr[1];
		var short_url = randifyer( twitUrl );
		return '<a target="_blank" href="' + short_url + '">' + short_url + '</a>';
	})
}

$(window).bind("load", function() {
    twitterFetcher.fetch('523126940958339072', function(tweets){
        var x = tweets.length;
        var n = 0;
        var element = document.getElementById('tweets');
        var html = '';
        while(n < 1) {
            if (tweets[n].innerText) {
                html += '<center><i class="fa fa-twitter"></i> &nbsp; "' + linkify(tweets[n].innerText) + '" &nbsp;<i class="fa fa-twitter fa-flip-horizontal"></i></center>';
            } else {
                html += '<center><i class="fa fa-twitter"></i> &nbsp;"' + linkify(tweets[n].textContent) + '" &nbsp;<i class="fa fa-twitter fa-flip-horizontal"></i></center> ';
            }
        n++;
      }
      html += '';
      element.innerHTML = html;
    });
});
