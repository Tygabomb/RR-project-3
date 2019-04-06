import React, { Component } from 'react';
import Wheel from "../../components/Wheel/";


class HomeScreen extends Component {
    state = {
        options: [],
        baseSize: 175
    }
    componentDidMount() {
        this.setState({
            options: ['war', 'hate', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf']
        })
    }
    handleOnComplete = value => {
        return value
    }

    renderWheel = () => {
        if(this.state.options.length > 0) {
            const { options } = this.state
            return (
            <Wheel
                options={this.state.options}
                baseSize={this.state.baseSize}
                onComplete={this.handleOnComplete}
            />)
        } else {
            return "Nothing is here"
        }
    }


    callApi = () => {
        this.setState({options: ["wingo", "oingo", "boingo"]})
    }


    render() {
        return (
            <div>
                {this.renderWheel()}
                <button onClick={this.callApi}>WHOP</button>
            </div>
        )
    }
}
export default HomeScreen