import React from "react";
import star from "./star.png"


export default function Movie(props) {
    function getStars(grade) {
        let stars = []
        for (let i = 0; i < grade; i++ ){
            stars.push(<img src={star} width="30px" className="float-end"></img>)
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