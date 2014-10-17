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


//aefxx: http://stackoverflow.com/a/5830517/2873157
function css(a) {
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (a.is(rules[r].selectorText)) {
                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            }
        }
    }
    return o;
}

function css2json(css) {
    var s = {};
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration) {
        for (var i in css) {
            if ((css[i]).toLowerCase) {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    } else if (typeof css == "string") {
        css = css.split("; ");
        for (var i in css) {
            var l = css[i].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
}

$(document).ready(function(){

	$('.embed-youtube').on('click', function(e) {

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
