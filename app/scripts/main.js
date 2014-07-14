// // console.log('\'Allo \'Allo!');
// var movie1 = new Movie({
//   movie: "Madoka Magica",
//   description: "not your average magic girls anime"
// })
// var movie2 = new Movie({
//   movie: "Game of Thrones",
//   description: "7 noble houses fight for control of the mythical land of Westeros"
// })
// var movie3 = new Movie({
//   movie: "Silicon Valley",
//   description: "Show that makes fun of all the rich clowns in California"
// })

// var moviesView = new MovieView({
//   movies: [movie1, movie2, movie3],
//   el: $('.movies'),
//   newMovieForm: $('#templates .new-movie').html()
// })

// moviesView.render();

(function () {

  // Instantiate a new, empty collection of tasks
  var movies = new Movies();

  // Create a new list view for our collection.
  // We tell it exactly where we want it to render (#mask-list).
  var movieListView = new MovieListView({
    collection: movies,
    el: '#movie-list'
  });

  // Add initial movies AFTER we create our movieListView. This is needed so that the
  // list view can listen for the collection's 'add' events.
  movies.add([
    { name: 'Madoka Magica' },
    { name: 'Silicon Valley'},
    { name: 'Snowpiercer' }
  ]);

  // Now we create a view to handle user input. This view allows the user to create new tasks.
  // Because the input html is already on the page, we tell this view to just use it (as opposed
  // to generating the html via an underscore template).
  var inputView = new MovieInputView({
    collection: movies,
    el: 'form.new-movie'
  });

})();
