"use strict";

var Router = Backbone.MvcRouter.extend({
   
    controller: null,
    
    routes: {
        "delete/:id": "onDeleteRouted",
        "add/:modelName": "onAddRouted"
    },

    onDeleteRouted: function (id) {
        this.routeToAction(this.controller.deleteMessage, id);
    },

    onAddRouted: function(modelName) {
        this.routeToAction(this.controller.addMessage, modelName);
    },

    defaultAction: "list",
    
    initialize: function (opts) {
        this.controller = opts.controller;
    },
});

