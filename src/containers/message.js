import React, { Component } from 'react';
import Chatboard from "../components/chat.js"
import { connect } from "react-redux";

class Message extends Component {
    handleData() {
        var { getData } = this.props;
        if (getData) {
          return  <Chatboard getData={getData}></Chatboard>
            console.log(getData, "getData")
        }
        else {
            console.log("get")
        }
    }
    render() {
        return (
            <div>
                {this.handleData()}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        getData: state.getData.data
    }
})(Message);