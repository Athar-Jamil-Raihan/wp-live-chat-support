jQuery(document).on("wplc_minimize_chat", function( e ) {
    jQuery('#wp-live-chat').height("");
    if(jQuery("#wp-live-chat").attr("original_pos") === "bottom_right"){
        jQuery("#wp-live-chat").css("left", "");
        jQuery("#wp-live-chat").css("bottom", "0");
        jQuery("#wp-live-chat").css("right", "100px");
    } else if(jQuery("#wp-live-chat").attr("original_pos") === "bottom_left"){
        jQuery("#wp-live-chat").css("left", "100px");
        jQuery("#wp-live-chat").css("bottom", "0");
        jQuery("#wp-live-chat").css("right", "");
    } else if(jQuery("#wp-live-chat").attr("original_pos") === "left"){
        jQuery("#wp-live-chat").css("left", "0");
        jQuery("#wp-live-chat").css("bottom", "100px");
    } else if(jQuery("#wp-live-chat").attr("original_pos") === "right"){
        jQuery("#wp-live-chat").css("left", "");
        jQuery("#wp-live-chat").css("right", "0");
        jQuery("#wp-live-chat").css("bottom", "100px");
        jQuery("#wp-live-chat").css("width", "");
    }
    jQuery('#wp-live-chat').addClass("wplc_close");
    jQuery('#wp-live-chat').removeClass("wplc_open");
    //jQuery("#wp-live-chat").css(jQuery("#wp-live-chat").attr("original_pos"), "100px");
    jQuery("#wp-live-chat").css("top", "");
    jQuery("#wp-live-chat-1").show();
    jQuery("#wp-live-chat-1").css('cursor', 'pointer');
    jQuery("#wp-live-chat-2").hide();
    jQuery("#wp-live-chat-3").hide();
    jQuery("#wp-live-chat-4").hide();
    jQuery("#wplc_social_holder").hide();
    jQuery("#nifty_ratings_holder").hide();
    jQuery("#wp-live-chat-react").hide();
    jQuery("#wp-live-chat-minimize").hide();




});

jQuery(document).on("wplc_start_chat", function( e ) { 
    jQuery("#wp-live-chat-2-inner").hide("slow");
    /* changed in version 7 as we now allow users to start typing immediately */
    /* jQuery("#wp-live-chat-3").show(); */
    jQuery.event.trigger({type: "wplc_open_chat_1"});
    jQuery.event.trigger({type: "wplc_open_chat_2", wplc_online: wplc_online});
});
jQuery(document).on( "wplc_open_chat_1", function( e ) {

	
    jQuery('#wp-live-chat').removeClass("wplc_close");
    jQuery('#wp-live-chat').addClass("wplc_open");
    //jQuery("#wp-live-chat-1").hide();
    jQuery("#wp-live-chat-react").hide();
    jQuery("#wp-live-chat-header").css('cursor', 'all-scroll');
    //jQuery("#wp-live-chat-1").css('cursor', 'all-scroll');
    Cookies.set('wplc_hide', "", { expires: 1, path: '/' });
    jQuery("#wp-live-chat-minimize").show();

	jQuery(function() {
		jQuery( "#wp-live-chat" ).draggable({ 
		    handle: "#wp-live-chat-header",
		    drag: function( event, ui ) {
		        jQuery(this).css("right","");
		        jQuery(this).css("bottom","inherit");
		    }
		});
	});


});

jQuery(document).on( "wplc_open_chat_2", function( e ) {

	jQuery("#wp-live-chat-2").hide();

    wplc_chat_status = Cookies.get('wplc_chat_status');
    if (typeof e.wplc_online !== "undefined" && e.wplc_online === true) {
       jQuery("#wp-live-chat-4").show();
       jQuery("#wplc_social_holder").show();
       jQuery("#nifty_ratings_holder").show();
       jQuery("#wplc_chatmsg").focus();
       jQuery("#wp-live-chat-1").css("cursor","pointer");
    } else if (e.wplc_online === false) {
       jQuery("#wp-live-chat-2").show();
       jQuery("#wp-live-chat-4").hide();
       jQuery("#wplc_social_holder").hide();
       jQuery("#nifty_ratings_holder").hide();
       jQuery("#wplc_chatmsg").focus();
       jQuery("#wp-live-chat-1").css("cursor","pointer");
   }

	jQuery("#wp-live-chat-3").hide();
	jQuery("#wp-live-chat-close").hide();
	//jQuery("#wp-live-chat-minimize").css("right","23px");
	Cookies.set('wplc_minimize', "", { expires: 1, path: '/' });
});

jQuery(document).ready(function() { 
	//opens chat when clicked on top bar
	jQuery("body").on("click", "#wp-live-chat-1", function() {
	    jQuery.event.trigger({type: "wplc_open_chat"});
	});
    jQuery("body").on("click", ".wplc_retry_chat", function() {
        jQuery.event.trigger({type: "wplc_open_chat"});
    });
    jQuery("body").on("click", "#speeching_button", function() {
        jQuery("#wplc_hovercard").hide();
        wplc_is_chat_open = true;
        jQuery.event.trigger({type: "wplc_open_chat"});
        

    });

    jQuery("body").on("click", "#wplc_hovercard_min", function(){
      jQuery("#wplc_hovercard").fadeOut();
    });

    jQuery("body").on("click", "#wp-live-chat-header", function(){
        jQuery("#wplc_hovercard").hide();
    });
});