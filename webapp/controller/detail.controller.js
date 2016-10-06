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
			var oJModel = new sap.ui.model.json.JSONModel();

			switch (para) {
				case "1":
					data.reportName = "Florida" + " State Report";
					this.getView().byId("idPuertoRicoTable").setVisible(false);
					break;

				case "2":
					data.reportName = "Puerto Rico" + " State Report";
					oJModel.loadData("../Json/PuertoRico.json", "", false);
					this.getView().byId("idPuertoRicoTable").setVisible(true);
					this.getView().setModel(oJModel);
					break;

				case "3":
					data.reportName = "Idaho" + " State Report";
					this.getView().byId("idPuertoRicoTable").setVisible(false);
					break;

				case "4":
					data.reportName = "New York" + " State Report";
					this.getView().byId("idPuertoRicoTable").setVisible(false);
					break;

			}

			oModel.setData(data);

			this.getView().setModel(oModel, "Report");
			var model = this.getView().getModel();
			//

		}

	});

});