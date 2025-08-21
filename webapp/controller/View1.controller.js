sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("projectproject.controller.View1", {
        onInit() {
        },

        onSubmitPress : function(){
            var name = this.getView().byId("name").getValue();
            var number = Number(this.getView().byId("number").getValue());
            var sUrl = "/workflow/rest/v1/workflow-instances";
            var oPayload = {
                "definitionId": "us10.935c8f13trial.bpaproject.process",
                "context": {
                    "_name": name,
                    "number": number
                }
            };
            fetch(sUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(oPayload)
            }).then(data => {
                console.log("Workflow triggered successfully", data);
            }).catch(error => {
                console.error("Error:", error);
            });
        }
    });
});