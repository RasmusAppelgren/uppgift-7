import React, {useState, useRef} from "react";
import Movie from "./Movie";

export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "First movie",
    }]);
    

    const inputRef = useRef();
    function addItem(event){
        if (event.keyCode === 13) {
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

            setMovies([...movies, {
                id: newId,
                title: inputRef.current.value
            }]);
            inputRef.current.value = "";
        }
    }
    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));

    }
    return (
        <div>
            <input className="form-control" placeholder="Ange filmtitel här" ref={inputRef} onKeyUp={addItem}></input>

            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} />)}
            </ul>
        </div>
    )
}