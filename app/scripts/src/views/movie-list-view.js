var MovieView = Backbone.View.extend({
  initialize: function(options) {
    this.movies = options.movies;
    this.el = options.el;
    this.newMovieForm = options.newMovieForm;
    var movieTemplateHtml = $('#templates .towatch').html();
    this.template = _.template(movieTemplateHtml)
    for (var i = 0; i < this.movies.length; i++) {
      this.listenTo(this.movies[i], 'change:complete', this.cleanCompletedMovies)
    }
  },
  render: function() {
    $(this.el).empty();
    $(this.el).closest('.container').find('.header').append(this.newMovieForm);
    for (var i = 0; i < this.movies.length; i++) {
        var newHtml = this.template(this.movies[i].toJSON());
        $(this.el).append(newHtml);
    }
  },
  cleanCompletedMovies: function() {
    var newMovies = [];
    for (var i = 0; i < this.movies.length; i++) {
      if (!this.movies[i].get("complete")) {
        newMovies.push(this.movies[i]);
      }
    }
    this.movies = newMovies;
    this.render();
  },

  markAsComplete: function(e) {
    var listParent = $(e.currentTarget).parents('li');
    var index = $('.movies').children().index(listParent);
    this.movies[index - 2].set("complete", true);
  },

  addMovie: function(e) {
    e.preventDefault();
    var name = $('.movie-name').val();
    var description = $('.movie-description').val();
    var newMovie = new Movie({
      movie: name,
      description: description
    })
    this.movies.push(newMovie)
    this.listenTo(newMovie, 'change:complete', this.cleanCompletedMovies)
    this.render();
  },

  events: {
    'change .complete': 'markAsComplete',
    'submit .new-movie-form': 'addMovie'
  }
})
