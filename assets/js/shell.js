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
