sap.ui.define([
	"abc/sap/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("abc.sap.controller.Main", {

		onInit: function() {

			//      1.Get the id of the VizFrame		
			var oVizFrame = this.getView().byId("idpiechart");

			//      2.Create a JSON Model and set the data
			var oModel = new sap.ui.model.json.JSONModel();
			var data = {
				'Federal': [{
					"Report": "Arcos",
					"Issue": "20"
				}, {
					"Report": "Narcos",
					"Issue": "30"
				}, {
					"Report": "Deacsos",
					"Issue": "25"
				}, {
					"Report": "OMP",
					"Issue": "25"
				}]
			};
			oModel.setData(data);

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

			//      4.Set Viz properties
			oVizFrame.setVizProperties({
				title: {
					text: "Federal Open Issues"
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

		}
	});

});