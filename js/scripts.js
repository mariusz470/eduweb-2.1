(function ($) {
	$(document).ready(function(){
		var clickedChecker = false;
		$("#checker").on("click", function(){
			
			if (!clickedChecker) {
				if (typeof String.prototype.repeat === "function") {
					$('body').append("<div>repeat available</div>");		
				}
				else {
					$('body').append("<div>repeat unavailable</div>");			
				}
				clickedChecker=true;
			}
		});
		 function add(){
			if (typeof String.prototype.repeatt === "function") return;
				String.prototype.repeatt = function (count) {
					if (count<0) {
						throw new RangeError("Invalid count value");
					}
					return(new Array(count+1)).join(this.toString());
				}
			$('body').append("<div>clicked</div>")
			

		}; 
		add();
	});
})(jQuery);