// Filename: views/projects/list
define([
    'jQuery',
    'Underscore',
    'Backbone',
    // Pull in the Collection module from above
    'collections/projects',
    'text!templates/projects/list.handlebars'

], function ($, _, Backbone, projectsCollection, projectListTemplate) {
    var projectListView = Backbone.View.extend({
        el:$("#page"),
        initialize:function () {
            this.collection = projectsCollection;
            this.collection.bind("add", this.exampleBind);
            this.collection = projectsCollection.add({ name:"Twitter"});
            this.collection = projectsCollection.add({ name:"Facebook"});
            this.collection = projectsCollection.add({ name:"Myspace", score:20});
        },
        exampleBind:function (model) {
            //console.log(model);
        },
        render:function () {
            var data = {
                projects:this.collection.toJSON()
            };
            console.info(data, this.collection);
            var template = Handlebars.compile(projectListTemplate);

            this.el.html(template(data));
        }
    });
    return new projectListView;
});
