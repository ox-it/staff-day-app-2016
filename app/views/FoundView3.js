define([
			'backbone', 
			'hbs!app/templates/found3'
		], function(
			Backbone,
			found3Template
) {

	var Found3View = Backbone.View.extend({
		
		template: found3Template,

		MIC_THRESHOLD: -8,
		
		initialize: function(params) {
			MicrophoneLevels.start();
			window.addEventListener('microphonelevels', _.bind(this.onMicLevels, this));
		},
		
		afterRender: function() {
			$("#final-message").hide();
		},

		onMicLevels: function(data) {
			if (data.averagePower > this.MIC_THRESHOLD) {
				this.onStartBlow();
			}
		},

		onStartBlow: function() {
			$("#final-message").show();
		},

		cleanup: function () {
			$(window).removeEventListener('microphonelevels', this.onMicLevels);
		},

	});

	return Found3View;

});
