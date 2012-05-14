// Filename: views/projects/list
define([
    'jQuery',
    'Underscore',
    'Backbone',
    'text!templates/users/list.handlebars'
], function ($, _, Backbone, userListTemplate) {
    var userListView = Backbone.View.extend({
        el:$("#page"),
        initialize:function () {
        },
        render:function () {
            var data = {

            };
            var compiledTemplate = Handlebars.compile(userListTemplate);
            this.el.html(compiledTemplate(data));
        }
    });
    return new userListView;
});
