import React, { Component } from "react";

class ProfileComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.name}'s Profile</h1>
            </div>
        );
    }
}

export default ProfileComponent;
