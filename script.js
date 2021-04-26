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
  if (
    oneTask != null &&
    twoTask != null &&
    oneTask != '' &&
    twoTask != '' &&
    oneTask.length < 50
  ) {
    personalMovieDB.movies[oneTask] = twoTask
  } else {
    i--
  }
}
if (personalMovieDB.count < 10) {
  console.log('Просмотренно довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель')
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман')
} else {
  console.log('Произошла ошибка')
}
console.log(personalMovieDB)
