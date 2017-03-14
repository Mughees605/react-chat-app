import React, { Component } from "react"
import { connect } from "react-redux"
import { RaisedButton , FontIcon} from "material-ui"

var action = require("../actions/index.js")

class Chatboard extends Component {
    handleLogout() {
        var { dispatch } = this.props;
        dispatch(action.startLogout());
    }
    render() {
        return (
            <div>
                <RaisedButton
                    onClick = {this.handleLogout.bind(this)}
                    label="Logout"
                    secondary={true}
                    fullWidth={true}
                    style={{ margin: "12px 0px" }}
                    icon={<FontIcon className=" s-icon-custom-github" />}
                />
            </div>
        )
    }
}
export default connect()(Chatboard);