/**
* Three State Buttons
*
* Copyright (c) 2011 Lakshan Perera (laktek.com)
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
*
*/

(function($) {
	/**
	 * This plugin is used to create activ button effect
		*/	
		$.fn.actionbutton = function(options){
			//build main options before element iteration
			var opts = $.extend({}, $.fn.actionbutton.defaults, options);
			
			  //iterate and reformat each matched element
			return this.each(function() {
				var $this = $(this);
        //get the variables of query
				var hover   = $this.attr('data-hover');
				var active  = $this.attr('data-active');
        var normal  = $this.attr('src');
        var bid     = $this.attr('id');
        //preload the images
        preloadImages(hover,active,bid);
        //mouse funcitons
            $this.hover(function(){
                //change button to hover image
                $this.attr({'src': hover});
            }, 
            function(){
                //change button to normal state
                $this.attr({'src': normal});
            }).mouseup(function(){
                //change button to hover image
                $this.attr({'src': hover});                              
            }).mousedown(function(){
                //change button to normal state
                $this.attr({'src': active});                              
            }).mouseenter(function(){
                //add the css style
                $(this).css("position", "relative");
            }).mouseleave(function(){
                //remove the css style
                $(this).css("position", "");                
            });
          
			 });
		};

		var image = new Array;

    function preloadImages(hover,active,bid) {
        //preload the hover image
        image[bid+'hover'] = new Image();
            image[bid+'hover'].src = hover;
        //preload the active image
        image[bid+'active'] = new Image();
            image[bid+'active'].src = active;
	  }

		
		// plugin defaults
		$.fn.actionbutton.defaults = {
				hover: '',
        active: ''
		};
})(jQuery);
