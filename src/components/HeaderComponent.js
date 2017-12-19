import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light mb-4">
                <Link className="navbar-brand" to={"/"}>React Router</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/home"}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/profile/view"}>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/explore/featured"}>Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/wishlist/offers"}>Wishlist</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/games/2018/latest"}>Latest</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;