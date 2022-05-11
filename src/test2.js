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
function Form() {
    const [state, setState] = React.useState({
        title: "",
        grade: ""
    })
    return (
        <div>
            <fieldset>
            <label>Titel:
            <input className="form-control" placeholder="Ange filmtitel här" type="text" value={state.title} onChange={handleChange} name="title"></input>
            </label>

            <select name="version" onChange={handleChange} value={state.version}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="submit" className="btn btn-success mt-3" value="Spara film" ref={inputRef} onSubmit={addItem}></input>
            </fieldset>

            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} grade={movie.grade} />)}
            </ul>
        </div>
    )
}