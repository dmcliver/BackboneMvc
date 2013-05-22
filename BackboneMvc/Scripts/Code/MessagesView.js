var MessagesView = Backbone.View.extend({
    
    template: _.template($("#messageListTemplate").html()),
    
    render: function() {

        _.each(this.model.models, function(message) {
            $(this.el).append(this.template(message.toJSON()));
        }, this);

        $("#messages").html(this.el);
        return this;
    }
});