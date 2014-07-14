(function () {

  // INPUT VIEW
  window.MovieInputView = Backbone.View.extend({

    events: {
      'submit': 'createMovie'
    },

    createMovie: function (e) {
      // Prevent the form from submitting
      e.preventDefault();

      // Grab the new movie name
      var newMovieName = $(this.el).find('[name=movie_name]').val();
      // Add a new movie to our collection
      this.collection.add({ name: newMovieName });
    }

  });

})();
