import React, { Component } from 'react';
import { TextField, FlatButton } from 'material-ui';

class Login extends Component {
    render() {
        return (
            <div style={{ width: "400px", margin: "30px auto" }}>
                <TextField
                    hintText="Jhon@expample.com"
                    floatingLabelText="Your Email"
                    type="email"
                    fullWidth={true}
                />
                <br />
                <TextField
                    floatingLabelText="password"
                    type="password"
                    fullWidth={true}
                />
                <br />
                <FlatButton label="Login" fullWidth={true} primary={true} />
            </div>
        );
    }
}

export default Login;