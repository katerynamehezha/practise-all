const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '')
    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '')
    }
  },
  rememberMyFilms: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log('Просмотренно довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман')
    } else {
      console.log('Произошла ошибка')
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB)
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false
    } else {
      personalMovieDB.privat = true
    }
  },
  writeYourGenres: () => {
    // for (let i = 1; i <= 3; i++) {
    // let genre = prompt(`Ваш любимый жанр под номером ${i}`, '')
    // if (genre != '' && genre != null) {
    //   personalMovieDB.genres[i - 1] = genre
    // } else {
    //   console.log('Вы ввели некоректные данные или не ввели никаких вообще')
    //   i--
    // }
    for (let i = 1; i < 2; i++) {
      let genres = prompt(
        'Введите ваши любимые жанры через запятую',
        ''
      ).toLowerCase()
      if (genres != '' && genres != null) {
        personalMovieDB.genres = genres.split(',')
        personalMovieDB.genres.sort()
      } else {
        console.log('Вы ввели некоректные данные или не ввели никаких вообще')
        i--
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`)
    })
  },
}
