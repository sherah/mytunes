var PlaylistEntryView = Backbone.View.extend({
  tagName: "tr",

  events: {
    "click": "removeFromQueue"
  },

  //templateString: ""
  //template: function(){_.template(this.templateString)}
  //do this in LibraryEntryView too. move
  //to the tops of the files

  template: _.template("<td>(<%= artist %>)</td><td class=\"tdwidth\"><%= title %></td>"),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  // event listener
  removeFromQueue: function(){
    this.model.unset("queuedAt");
  }

});

