import React from "react";
import "./ContentWrapper.css";

class ContentWrapper extends React.Component {

    render() {
        return (
            <div className="wrapperDiv mx-auto d-flex justify-content-center flex-wrap">
                {this.props.children}
            </div>
        )
    };

};

export default ContentWrapper;