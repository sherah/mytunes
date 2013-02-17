var PlaylistView = Backbone.View.extend({
  queuedSongs: [],

  initialize: function(){
  	this.collection.bind("change", this.handleQueueChange.bind(this));

	var self = this;
  	this.collection.each(function(song){
  		song.on("change:queuedAt",function(){
  			self.render();
  		});
  	});

  },

  render: function(){
  	var that=this;

  	if(that.queuedSongs.length===0){
    	that.$el.html("/click on something/");
	}else{
		that.$el.html("<h2>Playlist</h2>");
	  	this.subviews = this.queuedSongs.map(function(song){
	      return new PlaylistEntryView({model: song});
	    });

	    _.each(this.subviews, function(subview){
      		that.$el.append(subview.render());
    	});
	}

    return that.$el;

  },

  handleQueueChange: function(){

    this.queuedSongs = this.collection.queued();
    this.render();

  }
  



});

