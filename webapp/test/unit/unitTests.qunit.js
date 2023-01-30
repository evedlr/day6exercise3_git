/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zbtp/day6exerise3_delarosa/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
