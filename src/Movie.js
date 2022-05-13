import React from "react";
import star from "./star.png"

/*
Får variablerna inskickade till sig genom "props". Skapar ett li-element 
med titel och delete-knapp. Funktionen getStars tar filmens betyg som siffra
och returnerar därefter antalet stjärnor.
*/
export default function Movie(props) {
    function getStars(grade) {
        let stars = []
        for (let i = 0; i < grade; i++ ){
            stars.push(<img src={star} width="30px" alt="star" className="float-end"></img>)
        }
        return stars
    }

    return (
        <li className="list-group-item">
            {props.item.title}
            
            {getStars(props.item.grade)}
            
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
        </li>
    )
}