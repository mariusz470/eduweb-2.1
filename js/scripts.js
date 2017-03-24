(function ($) {
	$(document).ready(function(){
		var clickedChecker = false;
		$("#checker").on("click", function(){
			
			if (!clickedChecker) {
				if (typeof String.prototype.repeat == "function") {
					$('body').append("<div>repeat available</div>");		
				}
				else {
					$('body').append("<div>repeat unavailable</div>");			
				}
					$('body').append("<button id='addFunction'>click to add repeatt</div>");		
				clickedChecker=true;
			}
		});
		$("#addFunction").on("click", function(){
			if (String.prototype.repeatt =="function") return;
			else{
				String.prototype.repeatt == function (count) {
					if (count<0) {
						throw new RangeError("Invalid count value");
					}
					return(new Array(count+1)).join(this.toString());
				}
			}

		}); 
	});
})(jQuery);