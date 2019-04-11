import React, { Component } from 'react';
import Wheel from "../../components/Wheel/";
import API from "../../utils/api";





class HomeScreen extends Component {
    state = {
        options: [],
        baseSize: 275,
        chosenName: '',
        chosenUrl: '',
        chosenRating: 0,
        chosenLocation: '',
        chosenCoordinates: {
            latitude: 0,
            longitude: 0
        },
        chosenImage_url: ''
    }
    componentDidMount() {
        this.setState({
            options: ['', '', '', '', '', '', '', '', '', '']
        })
    }

    handleOnComplete = value => {
        return value
    }

    getRestaurantData = (e) => {
        e.preventDefault()
        API.getRandomResturant()
            .then(res => {
                // for (let i = 0; i < res.data.length; i++) {
                //     let { name, url, rating, location, image_url, cooridnates } = res.data
                //     this.setState({ options: [name[i]] })
                // }
                var nameArr = []

                res.data.forEach(business => {
                    let { name, url, rating, location, image_url, cooridnates } = business
                    console.log(name)
                    nameArr.push(name)
                    console.log(nameArr)
                    this.setState({ options: nameArr })
                })
            })
            .catch(err => console.log(err))
    }

    renderWheel = () => {
        if (this.state.options.length > 0) {
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
                <button onClick={this.getRestaurantData} id='fill-btn'>FILL YOUR WHEEL</button>
            </div>
        )
    }
}
export default HomeScreen