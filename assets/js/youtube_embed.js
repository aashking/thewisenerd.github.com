// yay!
// will fill in headers later.
// hope this works.

// prefs
var embed_width = "640";
var privacy_enabled = 1; // youtube vs. youtube-nocookie
var show_suggested_videos = 0; // '?rel=0' vs ''

function fix_player(embed_id) {
	// init var
	var embed_code = '';

	// header
	embed_code += "<iframe";

	// pref
	if ($( ".post-content" ).width() < embed_width) {
		embed_width = $( ".post-content" ).width();
	}
	var embed_height = 0.75 * embed_width;
	
	embed_code += " width=\"" + embed_width + "\"";

	embed_code += " height=\"" + embed_height + "\"";

	//code
	embed_code += " src=\"//www.youtube";
	if (privacy_enabled)
		embed_code += "-nocookie";
	embed_code += ".com/embed/";
	embed_code += embed_id;
	if (show_suggested_videos)
		embed_code += "?rel=0";
	embed_code += "\"";
	embed_code += " frameborder=\"0\"";
	embed_code += " allowfullscreen";
	embed_code += "></iframe>";
	return embed_code;
}

$(window).bind("load", function() {
	$('#ajax-container').on('click', '.embed-youtube', function(e) {

		$(".embed-youtube").attr("class", "embed-youtube-vid");

		$('.embed-youtube-vid').html(function(){
			if ( $('.embed-youtube-vid').attr('id') == undefined ) {
				return "no video id set!";
			} else {
				return fix_player( $('.embed-youtube-vid').attr('id') );
			}
		});

	});
});
