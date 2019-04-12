import React, { Component } from 'react';
import Wheel from "../../components/Wheel/";
import API from "../../utils/api";





class HomeScreen extends Component {
    state = {
        options: [],
        baseSize: 300,
        apiData: [],
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
                let apiDataArr = []
                let nameArr = []
                res.data.forEach(business => {
                    let { name, id, image_url, rating, coordinates, price, location } = business
                    // console.log(name)
                    nameArr.push(name)
                    apiDataArr.push({ restName: name, restId: id, restImageUrl: image_url, restRating: rating, restCoordinates: coordinates, restPrice: price, restLocation: location})
                    // console.log(nameArr)  
                    this.setState({
                        options: nameArr,
                        apiData: apiDataArr
                    }, () => {
                        cb()
                    })
                })
                console.log(this.state.apiData)
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