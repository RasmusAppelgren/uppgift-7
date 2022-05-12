function printMovies(movies) {
    $("#movie-list").html("");
    movies.forEach((movie) => {
        $("#movie-list").append(`<li data-grade="${movie.grade}" data-title="${movie.title}">
            ${movie.title}
            <img src="images/delete.png" alt="Delete movie" class="delete-movie">
            ${getStars(movie.grade)}
        </li>`);
    });
}

function loadMovies() {
    const movies = localStorage.movies;
    if (movies == undefined) {
        return [];
    }
    return JSON.parse(movies);
}

function getStars(grade) {
    return "<img src='images/star.png' alt='Star'>".repeat(grade);
}

function saveMovies(movies) {
    let jsonMovies = JSON.stringify(movies);
    localStorage.setItem("movies", jsonMovies);
}

$("#new-movie-form").on("submit", function (e) {
    e.preventDefault();

    const title = $("#title").val();
    const grade = $("#grade").val();

    if (title == "" || grade == "") {
        alert("Du måste ange både titel & betyg för att kunna spara filmen!")
        return false;
    }

    const movie = {
        title: title,
        grade: grade
    }

    const movies = loadMovies();
    movies.push(movie);

    $("#new-movie-form").trigger("reset");
    $("#new-movie-form")[0].reset();

    saveMovies(movies);
    printMovies(movies);
});


$("#order-alphabetic").on("click", function () {
    const movies = loadMovies();
    movies.sort(function(a,b) {
        return b.title - a.title
    });
    
    printMovies(movies.reverse());
});

$("#order-grade").on("click", function () {
    const movies = loadMovies();
    movies.sort(function(a,b) {
        return b.grade - a.grade
    });
    
    printMovies(movies);
});

$("#movie-list").on("click", ".delete-movie", function () {
    const title = $(this).parent().attr("data-title");    
    const grade = $(this).parent().attr("data-grade");    

    const movies = loadMovies();

    let index = -1;
    movies.forEach((movie, i) => {
        if (movie.title == title && movie.grade == parseInt(grade)) {
            index = i;
        }
    })

    if (index > -1) {
        movies.splice(index, 1);
    }

    saveMovies(movies);
    printMovies(movies);
});

// Skriver ut filmerna i vår lista när sidan laddats klart
$(document).ready(function () {
    const movies = loadMovies();
    printMovies(movies);
});