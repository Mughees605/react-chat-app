import React, { Component } from 'react';
import { TextField, FlatButton, RaisedButton, FontIcon } from 'material-ui';
import { connect } from "react-redux";
var action = require("../actions/index.js")

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var {dispatch}=this.props;
        dispatch(action.startLogin());
    }
    render() {
        return (
            <form style={{ width: "400px", margin: "30px auto" }} onSubmit={this.handleSubmit}>
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
                    ref="name"
                />
                <br />
                <FlatButton label="Login" fullWidth={true} secondary={true} />
                <br />
                <RaisedButton

                    type="submit"
                    label="Login with Github"
                    secondary={true}
                    fullWidth={true}
                    style={{ margin: "12px 0px" }}
                    icon={<FontIcon className=" s-icon-custom-github" />}
                />

            </form>
        );
    }
}

export default connect()(Login);