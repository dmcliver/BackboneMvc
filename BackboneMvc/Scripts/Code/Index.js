(function () {
    "use strict";

    var router = new Router({ controller: new Controller() });
    router.routeToDefaultAction();

    Backbone.history.start();
})();