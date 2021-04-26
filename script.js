let numberOfFilms
function start() {
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '')
  }
}
start()
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

function rememberMyFilms() {
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
}
rememberMyFilms()

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман')
  } else {
    console.log('Произошла ошибка')
  }
}
detectPersonalLevel()

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB)
  }
}
showMyDB(personalMovieDB.private)

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`,
      ''
    )
  }
}
writeYourGenres()

console.log(personalMovieDB)
