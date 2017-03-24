(function ($) {
	$(document).ready(function(){
		var clicked = false;
		$("#checker").on("click", function(){
			
			if (!clicked) {
				$('body').append("<div>button working</div>");		
				clicked=true;
			}
		}) 
	});
})(jQuery);