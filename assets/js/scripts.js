jQuery(function($) {

    /* ============================================================ */
    /* Scroll To Top */
    /* ============================================================ */

    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({'scrollTop': 0});
    });

    /* ============================================================ */
    /* Ajax Loading */
    /* ============================================================ */

    var History = window.History;
    var loading = false;
    var showIndex = false;
    var $ajaxContainer = $('#ajax-container');
    var $latestPost = $('#latest-post');
    var $postIndex = $('#post-index');

    // Initially hide the index and show the latest post
    $latestPost.show();
    $postIndex.hide();

    // Show the index if the url has "page" in it (a simple
    // way of checking if we're on a paginated page.)
    if (window.location.pathname.indexOf('page') === 1) {
		console.log("window.location.pathname.indexOf('page') == 1");
        $latestPost.hide();
        $postIndex.show();
    }

    // Check if history is enabled for the browser
    if ( ! History.enabled) {
		console.log("! History.enabled");
        return false;
    }

    History.Adapter.bind(window, 'statechange', function() {
        var State = History.getState();
        console.log ("History.getState()");
        console.log( State );
        console.log("----------------");

        // Get the requested url and replace the current content
        // with the loaded content
        $.get(State.url, function(result) {
            var $html = $(result);
            var $newContent = $('#ajax-container', $html).contents();

            $('html, body').animate({'scrollTop': 0});

            $ajaxContainer.fadeOut(500, function() {
                $latestPost = $newContent.filter('#latest-post');
                $postIndex = $newContent.filter('#post-index');
				
				console.log( "showIndex == "+ showIndex );
				console.log("----------------");

                $ajaxContainer.html($newContent);
                $ajaxContainer.fadeIn(500);

                if (showIndex === true) {
                    $('#latest-post').hide().fadeOut();
                    $('#post-index').fadeIn();
                } else {
                    $('#post-index').hide().fadeOut();
                    $('#latest-post').fadeIn();
                }

                NProgress.done();

                loading = false;
                showIndex = false;
            });
        });
    });

    $('body').on('click', '.js-ajax-link, .pagination a', function(e) {
        e.preventDefault();
		console.log ("body onclick loading"  + loading );
        if (loading === false) {
            var currentState = History.getState();
            console.log("currentState");
            console.log(currentState);
            var url = $(this).attr('href');
            console.log("url:" + url);
            var title = $(this).attr('title') || null;
            console.log("title:" + title);

            // If the requested url is not the current states url push
            // the new state and make the ajax call.
            if (url !== currentState.url.replace(/\/$/, "")) {
				console.log(url + "!==" + currentState.url.replace(/\/$/, "") );
                loading = true;

                // Check if we need to show the post index after we've
                // loaded the new content
                if ($(this).hasClass('js-show-index') || $(this).parent('.pagination').length > 0) {
                    showIndex = true;
                } else {
					showIndex = false;
				}
				console.log ("showIndex" + showIndex);

                NProgress.start();

                History.pushState({}, title, url);
            } else {
                // Swap in the latest post or post index as needed
                if ($(this).hasClass('js-show-index')) {
                    $('html, body').animate({'scrollTop': 0});
                    console.log ("case 2");

                    NProgress.start();

                    $('#latest-post').hide().fadeOut();
                    $('#post-index').fadeIn();
                    NProgress.done();

                    showIndex = true;
                } else {
                    $('html, body').animate({'scrollTop': 0});
                    console.log ("case 3");

                    NProgress.start();

                    $('#post-index').hide().fadeOut();
                    $('#latest-post').fadeIn();
                    NProgress.done();
                    showIndex = false;

                }
            }
        }
    });

});
