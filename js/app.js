// Filename: app.js
define([
    'jQuery',
    'Underscore',
    'Backbone',
    'router', // Request router.js
    'log'
], function ($, _, Backbone, Router, log) {
    var initialize = function () {
        log.debug(Log.dumpObject(arguments));
        Router.initialize();
    };

    return {
        initialize:initialize
    };
});
