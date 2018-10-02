import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar fixed-bottom">
                <h2 className="mb-0">{this.props.message}</h2>
                <h2 className="text-right">Score {this.props.score} - High Score {this.props.highScore}</h2>
            </nav>
        )
    }
}

export default Header;