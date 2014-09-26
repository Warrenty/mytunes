var PlaylistModel = Backbone.Model.extend({

  initialize: function(){
    this.set('playlistSongs', new PlaylistSongs());
  }

})

playlistCollection.add(new PlaylistModel({plName:input}))
