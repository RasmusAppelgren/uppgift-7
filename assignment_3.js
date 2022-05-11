function getStars(nr_of_stars) {
    return "<img src='images/star.png' alt='Star'>".repeat(nr_of_stars);
}

$("#movies").on("click", ".delete-movie-icon", function() {
    $(this).parent().remove();
});

$("#add-movie-form").on("submit", function(e) {
    e.preventDefault();

    const title = $("#title-field").val();
    const grade = $("#rating-field").val();

    if (title === "") {
        alert("Du måste ange en titel för att kunna spara filmen");
        return false;
    }

    if (grade === "0") {
        alert("Du måste ange ett betyg för att kunna spara filmen")
        return false;
    }

    const movie = `<li data-grade="${grade}" data-title="${title}">
        ${title}
        <img src="images/delete.png" alt="Delete movie" class="delete-movie-icon">
        ${getStars(grade)}
    </li>`;

    $("#movies").append(movie);

    $(this).trigger("reset");
});