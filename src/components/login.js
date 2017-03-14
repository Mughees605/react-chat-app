import React, { Component } from 'react';
import { TextField } from 'material-ui';

class Login extends Component {
    render() {
        return (
            <div>
                <TextField
                    hintText="Jhon@expample.com"
                    floatingLabelText="Your Email"
                    type="email"
                />
                <TextField
                    floatingLabelText="password"
                    type="password"
                />
            </div>
        );
    }
}

export default Login;