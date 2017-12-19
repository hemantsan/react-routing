import React, { Component } from "react";
import HeaderComponent from "../components/HeaderComponent";

class RouterComponent extends Component {
    render() {
        return (
            <div role="main" className="container">
                <HeaderComponent />
                <div className="jumbotron">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default RouterComponent;