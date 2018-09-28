import React from "react";
import "./Header.css";

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar fixed-bottom">
                <h2 className="mb-0">You Guessed Correctly</h2>
            </nav>
        );
    }

}

export default Header;