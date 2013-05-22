var Messages = Backbone.Collection.extend({

    model: Message,
    url: "http://localhost:57053/Message/Messages"
});