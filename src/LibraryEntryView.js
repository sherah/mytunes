var LibraryEntryView = Backbone.View.extend({

  tagName: "tr",

  events: {
    "click": "addToQueue"
  },

  // templates are a nicer way to put js data into html strings
  template: _.template("<td><img src=\"plus.png\"></td><td><img src=\"heart.png\"></td><td>(<%= artist %>)</td><td><%= title %></td>"),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
    console.log(/<%= artist %>/);
  },

  // event listener
  addToQueue: function(){
    this.model.set("queuedAt", new Date());
  }

});

