(function($){

	var initLayout = function() {
		var hash = window.location.hash.replace('#', '');
		
		var in_attr = $('#background_color').attr("value");
		
			$('#background_color').css({'border-top':'2px solid #' + in_attr,'border-right':'50px solid #' + in_attr,'border-bottom':'2px solid #' + in_attr,'border-left':'2px solid #' + in_attr});

		$('#background_color').ColorPicker({
			onSubmit: function(hsb, hex, rgb, el) {
				
				$(el).val(hex);
				$(el).ColorPickerHide();
				
			
			},
			onBeforeShow: function () {
				$(this).ColorPickerSetColor(this.value);
				
			},
			onChange: function (hsb, hex, rgb) {
				$('#background_color').css({'border-top':'2px solid #' + hex,'border-right':'50px solid #' + hex,'border-bottom':'2px solid #' + hex,'border-left':'2px solid #' + hex});
			}
		})
		.bind('keyup', function(){
			$(this).ColorPickerSetColor(this.value);
			
			
		});
		
		
		
		
		
	};
	
	
	EYE.register(initLayout, 'init');
	
})(jQuery)