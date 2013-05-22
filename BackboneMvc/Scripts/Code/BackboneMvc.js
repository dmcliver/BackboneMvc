Backbone.MvcRouter = Backbone.Router.extend({

    routeToAction: function (methodName, modelOrId) {

        this.navigate("/");

        try {
            eval("var modelInstance = new " + modelOrId + "()");
        }
        catch (e) {
                
        }
        
        if (!modelInstance)
            methodName(modelOrId).render();
        else {

            for (prop in modelInstance.toJSON()) {

                var val = $("input[name='" + modelOrId + "_" + prop + "']").val();
                if (val) {
                    
                    var obj = {};
                    obj[prop] = val;
                    modelInstance.set(obj);
                }
            }
            methodName(modelInstance).render();
        }
    },

    routeToDefaultAction: function () {
        this.controller[this.defaultAction]();
    }
});

