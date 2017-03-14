import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import Login from "./login.js"




class Main extends Component {
    render() {
        return (

            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Login />
            </div>

        );
    }
}

export default Main;