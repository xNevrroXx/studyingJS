"use strict";

/* a = 15; */
/* let number = 10;

number = 16;
console.log(number);

const obj = {
    name: "vladimir",
    age: 25,
    isMerried: false
};
console.log(obj["name"]);
console.log(obj.name);

const arr = [14, 15, 1, 29, 'str'];
console.log(arr[4]); */

/* const result = confirm("Вам есть 18 лет?");
console.log(result); */

/* const result = prompt("Сколько Вам лет?", "");
console.log(result); */

/* let category = 'toys',
    numberOfToy = 5;
console.log(`https://someurl/${category}/${numberOfToy}`); */



{
/* ///************** first practice **************/// */

/* ********* 1 task ********* */
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);


/* ********* 2 task ********* */
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


/* ********* 3 task ********* */
let film = prompt("Один из последних просмотренных фильмов?", ""),
    assessment = prompt("На сколько оцените его?"),
    film2 = prompt("Один из последних просмотренных фильмов?", ""),
    assessment2 = prompt("На сколько оцените его?");

personalMovieDB.movies[film] = assessment;
personalMovieDB.movies[film2] = assessment2;


console.log(personalMovieDB);
}

