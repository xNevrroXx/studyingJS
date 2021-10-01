"use strict";

const   box = document.getElementById('box'),
        buttons = document.getElementsByTagName('button')[1],
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        wrapper = document.querySelector('.wrapper');

/* hearts.forEach(item => { 
    item.style.backgroundColor = "black";//устаревшее 
}); */

/* hearts.forEach(item => { 
    item.style.cssText = "background-color: black";
}); */

const div = document.createElement('div');
div.classList.add('black');

/* wrapper.append(div);//append - после
wrapper.prepend(div);//prepend - до */
hearts[0].before(div);
circles[0].remove();
wrapper.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");

/* let personalMovieDB = {
    count:  0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,


    //methods
    askAboutTheFilm: function() { //спрашвает название одного из просмотренных фильмов и вашу оценку
        for(let i = 0; i < 1; i++) {
            let film, assessment;
        
            do {
                film = prompt("Один из последних просмотренных фильмов?", "");
                assessment = prompt("На сколько оцените его?");
            } while ( (film == null || assessment == null) || 
                    ( (film == "") || (film.length > 50) ) || 
                    ( (assessment == "") || (assessment.length > 50) ) 
                    );
        
            this.movies[film] = assessment;
        }
    },

    askNumberOfFilmsChecked: function() { //спрашивает кол-во просмотренных фильмов
        let numberOfFilms;
        do {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        } while ( numberOfFilms == null || numberOfFilms == "" || numberOfFilms < 0 || isNaN(numberOfFilms) );
        this.count = numberOfFilms;
    },

    getStatusHowManyFilmsChecked: function() { //определяет киноман вы или смотрите фильмов не очень много
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else {
            console.log("Вы киноман");
        }
    },

    writeYourGenres: function() { //спрашивает пользователя о любимых жанрах
        let favoriteGenre;
        for (let i = 0; i < 3; i++) {
            
            do {
                favoriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1} - `, "");
            } while ( favoriteGenre == null || favoriteGenre == "" || favoriteGenre.length < 2 );
    
            this.genres[i] = favoriteGenre;
        }

        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр под номером ${i + 1} - это ${item}`);
        });
    },

    showMyDB: function() { //выводит данные о пользователе касаемо фильмов
        if(!this.privat) {
            console.log(this);
        }
    },

    toggleVisibleMyDB: function() { //переключает свойство privat в другое положение
        if(this.privat == true) {
            this.privat = !this.privat;
        } else {
            this.privat = !this.privat;
        }
    },
};

personalMovieDB.askNumberOfFilmsChecked();
personalMovieDB.getStatusHowManyFilmsChecked();
personalMovieDB.askAboutTheFilm();
personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(); */


