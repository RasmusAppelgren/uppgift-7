import React, {useState} from "react";
import Movie from "./Movie";

export default function MovieList() {
    const [title, setMovies] = useState([{
        id: 1,
        title: "First movie",
    }]);
    const [grade, setGrade] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = {title, grade}

        console.log(movie)

    }

    
    function deleteItem(id) {
        setMovies(title.filter((item) => item.id !== id));

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Titel:</label>
                <input className="form-control" placeholder="Ange filmtitel här" value={title} onChange={(e) => setMovies(e.target.value)}></input>
                <label>Betyg:</label>
                <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" class="btn btn-success mt-3" value="Spara film"></input>
            </form>
            <ul className="list-group">
                { title.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} />)}
            </ul>
        </div> 
    )
}