// var MovieView = Backbone.View.extend({
//   initialize: function(options) {
//     this.movies = options.movies;
//     this.el = options.el;
//     this.newMovieForm = options.newMovieForm;
//     var movieTemplateHtml = $('#templates .towatch').html();
//     this.template = _.template(movieTemplateHtml)
//     for (var i = 0; i < this.movies.length; i++) {
//       this.listenTo(this.movies[i], 'change:complete', this.cleanCompletedMovies)
//     }
//   },
//   render: function() {
//     $(this.el).empty();
//     $(this.el).closest('.container').find('.header').append(this.newMovieForm);
//     for (var i = 0; i < this.movies.length; i++) {
//         var newHtml = this.template(this.movies[i].toJSON());
//         $(this.el).append(newHtml);
//     }
//   },
//   cleanCompletedMovies: function() {
//     var newMovies = [];
//     for (var i = 0; i < this.movies.length; i++) {
//       if (!this.movies[i].get("complete")) {
//         newMovies.push(this.movies[i]);
//       }
//     }
//     this.movies = newMovies;
//     this.render();
//   },

//   markAsComplete: function(e) {
//     var listParent = $(e.currentTarget).parents('li');
//     var index = $('.movies').children().index(listParent);
//     this.movies[index - 2].set("complete", true);
//   },

//   addMovie: function(e) {
//     e.preventDefault();
//     var name = $('.movie-name').val();
//     var description = $('.movie-description').val();
//     var newMovie = new Movie({
//       movie: name,
//       description: description
//     })
//     this.movies.push(newMovie)
//     this.listenTo(newMovie, 'change:complete', this.cleanCompletedMovies)
//     this.render();
//   },

//   events: {
//     'change .complete': 'markAsComplete',
//     'submit .new-movie-form': 'addMovie'
//   }
// })

(function () {

  // LIST VIEW
  window.MovieListView = Backbone.View.extend({

    assignNewMovieView: function (movie) {
      // Create a new view and assign it to the movie model.
      // We're assigning it to the model instance so we can grab it later in `render`
      movie.view = new MovieView({ model: movie });

      // Render the new view and add it to our element
      movie.view.render();
      $(this.el).append( movie.view.el );
    },

    initialize: function (options) {
      // Call our assignNewMovieView function whenever our collection gets a new task.
      this.listenTo(this.collection, 'add', this.assignNewMovieView);
    },

    render: function () {
      // Here we are basically re-renders the collection.
      // Useful for calling when the collection removes a model
      $(this.el).empty();

      // Performs the assignNewTaskView function on each model in our collection.
      // We need to specifically tell .each to use this TaskList view as the caller.
      // We do that by passing it as the second argument.
      this.collection.each(this.assignNewMovieView);
    }

  });

})();
