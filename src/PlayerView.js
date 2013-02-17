var PlayerView = Backbone.View.extend({
  id: "playerBox",

  initialize: function(){
    // set up an event listener on the songs collection
    this.collection.bind("change", this.handleQueueChange.bind(this));  
  },

  // templates are a nicer way to put js data into html strings
  template: _.template('<audio src="<%= url %>" controls autoplay></audio>'),

  render: function(){
    //this.$el.empty();
    if(this.model){
      this.$el.html(this.template(this.model.attributes));
      this.$el.find("audio").on("ended", this.playNextSong.bind(this));
    }
    return this.$el;
  },

  // event listener
  handleQueueChange: function(){
    if(!this.model || !this.model.queuedAt){
      this.model = this.collection.queued()[0];
      this.render();
    }
  },

  playNextSong: function(){
    this.model.unset("queuedAt");
  }

});

