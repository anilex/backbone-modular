define(['order!libs/jquery/jquery-min', 'order!libs/underscore/underscore-min', 'order!libs/backbone/backbone-min', 'order!libs/log4js/log4js', 'order!libs/handlebars/handlebars-1.0.0.beta.6'],
    function () {
        return {
            Backbone:Backbone.noConflict(),
            _:_.noConflict(),
            $:jQuery.noConflict(),
            log:new Log(Log.DEBUG, Log.consoleLogger)
        };
    });
