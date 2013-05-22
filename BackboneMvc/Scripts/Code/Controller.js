var Controller = (function() {

    "use strict";

    var self = this;
    self.messages = null;
    
    self.deleteMessage = function (id) {
        
        var message = self.messages.where({ id: parseInt(id) })[0];
        self.messages.remove(message);
        message.destroy();
        return new MessagesView({ model: self.messages });
    };

    self.addMessage = function (message) {
        
        self.messages.add(message);
        message.save();
        return new MessagesView({ model: self.messages });
    };

    self.list = function () {

        self.messages = new Messages();
        
        self.messages.fetch({
            success: self.renderView,
            error: self.showError
        });
    };

    self.renderView = function(result) {
        new MessagesView({ model: result }).render();
    };

    self.showError = function(model, resp) {
        alert(resp.statusText);
    };
});

