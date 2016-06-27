define([
			'backbone', 
			'hbs!app/templates/found1'
		], function(
			Backbone, 
			found1Template
) {

	var Found1View = Backbone.View.extend({

		template: found1Template,
		
		THRESHOLD_ANGLE: 170,

		initialize: function(params) {
			if (window.DeviceOrientationEvent) {
				$(window).on('deviceorientation', this, _.bind(this.deviceOrientationHandler, this));
			}
		},
		
		afterRender: function () {
			$("#continue-button-1").hide();
		},
		
		deviceOrientationHandler: function (ev) {
			if (ev.originalEvent.beta > this.THRESHOLD_ANGLE) {
				$("#continue-button-1").show();
			}
		},

		cleanup: function () {
			$(window).off('deviceorientation');
		},
		
	});

	return Found1View;

});
