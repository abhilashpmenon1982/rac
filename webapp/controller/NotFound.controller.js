sap.ui.define([
		"abc/sap/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("abc.sap.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);