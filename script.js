const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '')
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}
for (let i = 0; i < 2; i++) {
  const oneTask = prompt('Один из последних просмотренных фильмов?', '')
  const twoTask = prompt('На сколько оценете его?', '')
  personalMovieDB.movies[oneTask] = twoTask
}
console.log(personalMovieDB)
