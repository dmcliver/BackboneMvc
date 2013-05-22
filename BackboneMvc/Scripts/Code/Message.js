var Message = Backbone.Model.extend({

    defaults: {
        
        id: 0,
        Body: ""
    },
    
    urlRoot: "http://localhost:57053/Message/Messages"
});

