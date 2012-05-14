define([
  'jQuery',
  'Underscore',
  'Backbone',
  'text!templates/home/main.handlebars'
], function($, _, Backbone, mainHomeTemplate){

  var mainHomeView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      this.el.html(mainHomeTemplate);
    }
  });
  return new mainHomeView;
});
