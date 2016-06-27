define([
			'backbone', 
			'hbs!app/templates/found2'
		], function(
			Backbone, 
			found2Template
) {

	var Found2View = Backbone.View.extend({

		template: found2Template,

		initialize: function(params) {
			
		},
		
		events: {
			"click .continue": "startIR"
		},
		
		startIR: function() {
			navigator.VuforiaPlugin.startVuforia(
				'www/targets/StaffDay.xml',
				['ted', 'parrot'],
				"Who's a pretty boy then?",
				'AfOrSYL/////AAAAAXGVS+ob7UQ6gKHlPNX5+C9b6gQCj7opl93dY/TdsQiIGScyH24PHQrvYADcmydL9mXuDebbJ3bXWMzW+f3NgA/zeIXx4LpxoRIGp7YWDqREULzbnavwwX9iV2tcaP3eCYXGaLChIZhlwRMqm2pTpNWh1eY1MGdTWCgIA0X+IljNhju2/1v6gHDQ3Zu43cmCG5N+4tej2dJhAiUTeL2fF5lIM765MGF7TPSwzFuDQxElyUwpO9Xkjg4j0TBvngzYPXeHEpus6pqEdlZUZyyoTCWYmcGzU2JdFvW9GCD8OXOEAdhCPZEJKtrU3V8G5tkN6Eb7srID2Y/oTHTrlNtCJW9ocF7Ic82OL8dhJw8otsMH',
				function (data) {
					Backbone.history.navigate("#/find/3");
				}
			);
		}

	});

	return Found2View;

});
