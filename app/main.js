define([
			'backbone', 
			'underscore',
			'app/location',
			'layoutmanager', 
			'app/router/router'
		], function(
			Backbone, 
			_, 
			Location,
			Layout, 
			Router
){

		var Location_UUID_beacons = 'D191E31B-4298-41B5-BFE7-3382B57B9D81'; //generated for our beacons

		var App = {
			onDeviceReady: function() {
				//callback for tests
				console.log("Device ready");

				//configure Layoutmanager to manage views by default
				Backbone.Layout.configure({ manage:true });

				Location.init();
				Location.startRangingRegion(Location_UUID_beacons);

				//create router
				var router = new Router();

				if(this.onReady) {
					this.onReady();
				}
			},

			initialize: function(onReady) {
				//wait for device ready event. This is fired from the html when not on a device.
				//takes a custom callback to call when the app is ready
				this.onReady = onReady;
				document.addEventListener('deviceready', _.bind(this.onDeviceReady,this), false);
			}
		};

		return App;
});
