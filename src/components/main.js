import React, { Component } from 'react';
import { AppBar } from 'material-ui';

class Main extends Component {
    render() {
        return (

            <div>
                <AppBar
                    title="React-Chat-App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                {this.props.children}
            </div>

        );
    }
}

export default Main;