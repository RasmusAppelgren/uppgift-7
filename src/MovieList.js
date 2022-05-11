import React, {useState, useRef} from "react";
import Movie from "./Movie";

export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "First movie",
        grade: 1
    }]);
    

    const inputRef = useRef();
    function addItem(event){
        if (event.keyCode === 13) {
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

            setMovies([...movies, {
                id: newId,
                title: inputRef.current.value,
                grade: inputRef.current.value
            }]);
            inputRef.current.value = "";
        }
    }
    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));

    }
    return (
        <div>
            <form>
            <input className="form-control" placeholder="Ange filmtitel här"></input>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="submit" className="btn btn-success mt-3" value="Spara film" ref={inputRef} onSubmit={addItem}></input>
            </form>

            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} grade={movie.grade} />)}
            </ul>
        </div>
    )
}