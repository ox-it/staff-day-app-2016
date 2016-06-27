define([
			'backbone', 
			'hbs!app/templates/finding_template'
		], function(
			Backbone, 
			findingTemplate
) {

	var data = {
		1: {
			text: "Find the first location",
			clue: "Lorem ipsum"
		},
		2: {
			text: "Find the second location",
			clue: "Lorem ipsum"
		},
		3: {
			text: "Find the final location",
			clue: "Lorem ipsum"
		}
	};

	var ExampleView = Backbone.View.extend({

		initialize: function (params) {
			this.index = params.index;
			this.listenTo(Backbone, 'beaconRange:' + this.index, this.seenBeacon.bind(this));
		},

		template: findingTemplate,

		serialize: function() {
			return data[this.index];
		},

		events: {
			"click .found": "goToFound"
		},
		
		seenBeacon: function (beaconData) {
			if(beaconData.proximity == 'ProximityImmediate' || beaconData.proximity == 'ProximityNear') {
				this.goToFound();
			}
		},
		
		goToFound: function () {
			Backbone.history.navigate("#/found/" + this.index);
		}

	});

	return ExampleView;

});
