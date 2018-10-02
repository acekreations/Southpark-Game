import React from "react";
import "./Cards.css";

class Cards extends React.Component {
    render(){
        return (
            <div className="card" {...this.props}>
                <img className="card-img" src={this.props.link} alt=""/>
            </div>
        )
    }
}

export default Cards;