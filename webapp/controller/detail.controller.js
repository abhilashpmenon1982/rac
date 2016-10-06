sap.ui.define([
	"abc/sap/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("abc.sap.controller.detail", {

		onInit: function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function(oEvent) {

			var oModel = new sap.ui.model.json.JSONModel();
			var data = {};
			var para = oEvent.getParameter("arguments").reportName;

			switch (para) {
				case "1":
					data.reportName = "Florida";
					break;

				case "2":
					data.reportName = "Puerto Rico";
					break;

				case "3":
					data.reportName = "Idaho";
					break;

				case "4":
					data.reportName = "New York";
					break;

			}

			oModel.setData(data);

			this.getView().setModel(oModel, "Report");
			var model = this.getView().getModel();

		}

	});

});