jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"abc/sap/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"abc/sap/test/integration/pages/Worklist",
		"abc/sap/test/integration/pages/Object",
		"abc/sap/test/integration/pages/NotFound",
		"abc/sap/test/integration/pages/Browser",
		"abc/sap/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "abc.sap.view."
	});

	sap.ui.require([
		"abc/sap/test/integration/WorklistJourney",
		"abc/sap/test/integration/ObjectJourney",
		"abc/sap/test/integration/NavigationJourney",
		"abc/sap/test/integration/NotFoundJourney",
		"abc/sap/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});