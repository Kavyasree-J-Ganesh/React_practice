import React, { Component } from "react";

 export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value = {this.state.username}
                    onChange={this.handleUsernameChange} />
                </div>
            </form>
        )
    }
}