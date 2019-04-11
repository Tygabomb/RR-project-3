import React, { Component } from 'react';
import Wheel from "../../components/Wheel/";
import API from "../../utils/api";





class HomeScreen extends Component {
    state = {
        options: [],
        baseSize: 300,
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

    setChosenName = name => {
        this.setState({ chosenName: name })
    }

    handleOnComplete = value => {
        return value
    }

    getRestaurantData = (cb) => {

        API.getRandomResturant()
            .then(res => {
                // for (let i = 0; i < res.data.length; i++) {
                //     let { name, url, rating, location, image_url, cooridnates } = res.data
                //     this.setState({ options: [name[i]] })
                // }
                let nameArr = []

                res.data.forEach(business => {
                    let { name, url, rating, location, image_url, cooridnates } = business
                    console.log(name)
                    nameArr.push(name)
                    console.log(nameArr)
                    this.setState({ options: nameArr }, () => {
                        cb()
                    })
                })
            })
            .then(business => {

            })
            .catch(err => console.log(err))
    }

    renderWheel = () => {
        if (this.state.options.length > 0) {
            const { options } = this.state
            return (
                <Wheel
                    setChosenName={this.setChosenName}
                    callRestAPI={this.getRestaurantData}
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
            </div>
        )
    }
}
export default HomeScreen