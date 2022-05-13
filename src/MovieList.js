import React, {useState, useRef} from "react";
import Movie from "./Movie";

   /* Funktioner
    Er webbsida ska ha följande funktioner:
    Funkar
   1.  Användare ska kunna lägga till en film genom att ange en titel och ett betyg.
   3. Formuläret återställs efter en film är tillagd
   4. En film i listan ska representeras av titel (text) och stjärnor (så många stjärn-ikoner som betyget filmen har)
   5. Användare ska kunna ta bort en film genom att klicka på ikonen med ett kryss
   2. Ni ska validera att användaren angett både titel och betyg har angetts innan en film kan sparas. Återkoppling ska ske genom popup-rutor.

   Kvar att göra 
   6. I denna uppgift ska ni implementera sorterings-funktionerna (sortering enligt alfabetisk ordning, samt efter filmens betyg)
*/
    
export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "First movie",
        grade: "5"
    }]);

    
    const inputTitle = useRef();
    const inputGrade = useRef();
   
  
    function addItem(event){
        
        event.preventDefault();

        if (inputTitle.current.value === "") {
            alert("Du måste ange en titel för att kunna spara filmen");
            return false;
        }
    
        if (inputGrade.current.value < "1") {
            alert("Du måste ange ett betyg för att kunna spara filmen")
            return false;
        }
        
        const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        setMovies([...movies, {
            id: newId,
            title: inputTitle.current.value,
            grade: parseInt(inputGrade.current.value),
     
        }]);
        inputTitle.current.value = "";
        inputGrade.current.value = "";
    }
    function sortbyGrade() {
        let sortedMovies = [...movies];
        sortedMovies.sort(function(a,b){
            return parseInt(b.grade)  - parseInt(a.grade);
           }) 
        setMovies(sortedMovies);     
    }
    function sortbyAscending() {
        let movieToSort = [...movies];
        const sortedItems = movieToSort.sort((a,b) => a.title.localeCompare(b.title))
        setMovies(sortedItems);    
    }
    
    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));

    }



    return (
        <div>
            <form onSubmit={addItem}>
            <input className="form-control" placeholder="Ange filmtitel här" ref={inputTitle} it="title"></input>
            <select ref={inputGrade} id="grade"> 
                <option value="0">Välj betyg här...</option>
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
            <button id="order-alphabetic" className="btn btn-primary" onClick={() => sortbyAscending()}>
                Alfabetisk ordning
            </button>
            <button id="order-grade" className="btn btn-primary" onClick={() => sortbyGrade()}>
                Betygsordning
            </button>
        </div>
    )
}


/*
sortedMovies.sort((a, b) => {
            if (a[sortedMovies] < b[sortedMovies]) {
                return -1;
            }
            
            if (a[sortedMovies] > b[sortedMovies]) {
                return 1; 
            }

            return 0;
        });
        */