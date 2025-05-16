sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.training.exc.controller.Overview", {

            onSave: function () {
                if (!this.pDialog) {
                  this.pDialog = this.loadFragment({
                    name: "sap.training.exc.view.Dialog"
                  });
                }
                this.pDialog.then(function (oDialog) {
                  oDialog.open();
                });
              },
              onCloseDialog: function () {
                this.byId("dialog").close();
              }
        });
    });
