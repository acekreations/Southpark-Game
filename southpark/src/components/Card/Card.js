import React from "react";
import "./Card.css";

class Card extends React.Component {
    render(){
        return (
            <div className="card">
                <img className="card-img" src="https://via.placeholder.com/200x200" alt=""/>
            </div>
        )
    }
}

export default Card;