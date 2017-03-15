import React, { Component } from "react"
import { connect } from "react-redux"
import { RaisedButton, FontIcon, TextField } from "material-ui"

var action = require("../actions/index.js")

class Chatboard extends Component {
    handleLogout() {
        var { dispatch } = this.props;
        dispatch(action.startLogout());
    }
    handleMessage() {
        var message = this.refs.message.getValue();
        var {dispatch} = this.props;
        dispatch(action.handleMessage(message))
    }
    render() {
        return (
            <div>
                <RaisedButton
                    onClick={this.handleLogout.bind(this)}
                    label="Logout"
                    secondary={true}
                    fullWidth={true}
                    style={{ margin: "12px 0px" }}
                    icon={<FontIcon className=" s-icon-custom-github" />}
                />

                <TextField
                    hintText="type your message here"
                    ref="message"
                />
                <RaisedButton
                    label="submit"
                    onClick={this.handleMessage.bind(this)}
                    secondary={true}

                />
            </div>
        )
    }
}
export default connect()(Chatboard);