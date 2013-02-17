var Songs = Backbone.Collection.extend({
  // return queued songs
  queued: function(){
    // chain, filter, sortBy, and value are from underscore
    //chain returns a wrapped object (like song)
    //filter returns true values, given an obj/iterator
    //sortBy Returns a sorted copy of list, ranked in 
    //ascending order by the results of running each value 
    //through iterator.
    //value extracts the value of the wrapped obj
    return this.chain().filter(function(song){
      return !!song.attributes.queuedAt;
    }).sortBy(function(song){
      return song.attributes.queuedAt;
    }).value();
  }
});
