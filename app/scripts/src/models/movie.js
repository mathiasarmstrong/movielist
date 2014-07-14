(function(){

window.Movie = Backbone.Model.extend({

  defaults: {
    complete: false
  }

});

  // COLLECTION
window.Movies = Backbone.Collection.extend({
    model: Movie
  });
})();
