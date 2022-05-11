import React, {useState, useRef} from "react";
import Movie from "./Movie";
   /* Funktioner
    Er webbsida ska ha följande funktioner:

   1.  Användare ska kunna lägga till en film genom att ange en titel och ett betyg.
   2. Ni ska validera att användaren angett både titel och betyg har angetts innan en film kan sparas. Återkoppling ska ske genom popup-rutor.
   3. Formuläret återställs efter en film är tillagd
   4. En film i listan ska representeras av titel (text) och stjärnor (så många stjärn-ikoner som betyget filmen har)
   5. Användare ska kunna ta bort en film genom att klicka på ikonen med ett kryss
   6. I denna uppgift ska ni implementera sorterings-funktionerna (sortering enligt alfabetisk ordning, samt efter filmens betyg)
*/
    
export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "First movie",
        grade: ""
    }]);

    
    const inputTitle = useRef();
    const inputGrade = useRef();
  
    function addItem(event){
        console.log("SUBMIT!")
        event.preventDefault()
        
        const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        setMovies([...movies, {
            id: newId,
            title: inputTitle.current.value,
            grade: parseInt(inputGrade.current.value),
        }]);
    
        inputTitle.current.value = "";
        inputGrade.current.value = "";
    
    }
    
    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));

    }

    return (
        <div>
            <form onSubmit={addItem}>


            <input className="form-control" placeholder="Ange filmtitel här" ref={inputTitle} it="title"></input>


            <select ref={inputGrade} id="grade"> 
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            
            <input type="submit" className="btn btn-success mt-3" value="Spara film"></input>
            </form>

            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} grade={movie.grade} />)}
            </ul>
        </div>
    )
}