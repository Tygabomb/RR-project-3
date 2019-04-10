import React, { Component } from 'react';
import Wheel from "../../components/Wheel/";
import API from "../../utils/api"; 




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

    getRestaurantData = () => {
        API.getRandomResturant()
        .then(res => {
            res.data.forEach(business => {
                let {name, url, rating, location, image_url, cooridnates} = business
                console.log(name)
            });   
        })
        .catch(err => console.log(err))
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


    // callApi = () => {
    //     this.setState({options: ["wingo", "oingo", "boingo"]})
    // }


    render() {
        return (
            <div>
                {this.renderWheel()}
                <button onClick={this.getRestaurantData}>WHOP</button>
            </div>
        )
    }
}
export default HomeScreen