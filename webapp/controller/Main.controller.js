sap.ui.define([
	"abc/sap/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("abc.sap.controller.Main", {

		onInit: function() {

			//      1.Get the id of the VizFrame		
			var oVizFrame = this.getView().byId("idpiechart");
			oVizFrame.setHeight("400px");

			//      2.Create a JSON Model and set the data
			var oModel = new sap.ui.model.json.JSONModel();

			//oModel.setData(data);
			oModel.loadData("../Json/StatePie.json" ,"", false);

			//      3. Create Viz dataset to feed to the data to the graph
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: 'Report Name',
					value: "{Report}"
				}],

				measures: [{
					name: 'Issue',
					value: '{Issue}'
				}],

				data: {
					path: "/Federal"
				}
			});
			oVizFrame.setDataset(oDataset);
			oVizFrame.setModel(oModel);
			this.getView().setModel(oModel);

			//      4.Set Viz properties
			oVizFrame.setVizProperties({
				title: {
					text: "State Compliance Status"
				},
				plotArea: {
					colorPalette: d3.scale.category20().range(),
					drawingEffect: "glossy"
				}
			});

			var feedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "size",
					'type': "Measure",
					'values': ["Issue"]
				}),
				feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "color",
					'type': "Dimension",
					'values': ["Report Name"]
				});

			oVizFrame.addFeed(feedSize);
			oVizFrame.addFeed(feedColor);

		},

		onDetail: function(oEvent) {
			var name = oEvent.getParameter("data")[0].data["Report Name"];
			var para;
			switch (name) {
				case "Florida":
					para = 1;
					break;

				case "Puerto Rico":
					para = 2;
					break;

				case "Idaho":
					para = 3;
					break;

				case "New York":
					para = 4;
					break;

			}

           var oVizFrame = this.getView().byId("idpiechart");
           oVizFrame.fireDeselectData();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter = this.getRouter();
			oRouter.navTo("detail", {
				reportName: para
			});

		}

	});

});