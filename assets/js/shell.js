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

$(window).bind("load", function() {
    twitterFetcher.fetch('523126940958339072', function(tweets){
        var x = tweets.length;
        var n = 0;
        var element = document.getElementById('tweets');
        var html = '';
        while(n < 1) {
            if (tweets[n].innerText) {
                html += '<center><i class="fa fa-twitter"></i> &nbsp; "' + tweets[n].innerText + '" &nbsp;<i class="fa fa-twitter fa-flip-horizontal"></i></center>';
            } else {
                html += '<center><i class="fa fa-twitter"></i> &nbsp;"' + tweets[n].textContent + '" &nbsp;<i class="fa fa-twitter fa-flip-horizontal"></i></center> ';
            }
        n++;
      }
      html += '';
      element.innerHTML = html;
    });
});
