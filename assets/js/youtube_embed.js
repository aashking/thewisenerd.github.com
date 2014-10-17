/*******************************************************************************
                            ### youtube embedder ###
    Coded by Vineeth Raj (thewisenerd) late-2014.
    thewisenerd.github.io
    Please keep this disclaimer with my code if you use it. Thanks. :)
    Got feedback or questions, ping me here: contact.twn@openmailbox.org
*******************************************************************************/


var embed_width = "640";		// default (max) embed width
var privacy_enabled = 1;		// youtube vs. youtube-nocookie
								// YouTube promises will not leave cookies in the 
								// browsers of users who have not yet clicked the
								// "play" button to view a video.
var show_suggested_videos = 0;	// '?rel=0' vs ''

function fix_player(embed_id) {
	var embed_code = '';

	embed_code += "<iframe";


	if ($( ".post-content" ).width() < embed_width)
		embed_width = $( ".post-content" ).width();
	var embed_height = 0.75 * embed_width;
	
	embed_code += " width=\"" + embed_width + "\"";
	embed_code += " height=\"" + embed_height + "\"";
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
