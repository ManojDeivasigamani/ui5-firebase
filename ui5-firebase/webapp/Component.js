sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
    "fb/ui5firebase/model/models",
    "./firebase"
], function (UIComponent, Device, models, firebase ) {
	"use strict";

	return UIComponent.extend("fb.ui5firebase.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
            this.setModel(models.createDeviceModel(), "device");
            
            // Import Firebase in the sap.ui.define
			// set the firebase model by calling the initializeFirebase function in the Firebase.js file
			this.setModel(firebase.initializeFirebase(), "firebase");
		}
	});
});
