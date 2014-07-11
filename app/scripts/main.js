// console.log('\'Allo \'Allo!');
var movie1 = new Movie({
  movie: "Madoka Magica",
  description: "not your average magic girls anime"
})
var movie2 = new Movie({
  movie: "Game of Thrones",
  description: "7 noble houses fight for control of the mythical land of Westeros"
})
var movie3 = new Movie({
  movie: "Silicon Valley",
  description: "Show that makes fun of all the rich clowns in California"
})

var moviesView = new MovieView({
  movies: [movie1, movie2, movie3],
  el: $('.movies'),
  newMovieForm: $('#templates .new-movie').html()
})

moviesView.render();
