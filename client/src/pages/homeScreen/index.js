import React, { Component } from 'react';
import Wheel from "../../components/Wheel/";
import API from "../../utils/api";



class HomeScreen extends Component {
    state = {
        options: [],
        baseSize: 300,
        apiData: [],
        chosenName: '',
        chosenYelpUrl: '',
        chosenRating: 0,
        chosenAddress1: '',
        chosenAddress2: '',
        chosenAddress3: '',
        chosenLat: 0,
        chosenlong: 0,
        chosenImage_url: '',
        chosenCategories: [],
        chosenPhoneNum: '',
        chosenId: '',
        chosenPrice: '',
    }
    componentDidMount() {
        this.setState({
            options: ['', '', '', '', '', '', '', '', '', '']
        })
    }

    setChosenName = name => {
        this.setState({ chosenName: name })
    }

    // setUserLocation = location => {
    //     this.setState({ })
    // }

    handleOnComplete = () => {
        for (let i = 0; i < this.state.apiData.length; i++) {
            const { restName, restId, restImageUrl, restRating, restCoordinates, restPrice, restLocation, restCategories, restPhoneNum, yelpUrl } = this.state.apiData[i]
            const addressLine1 = restLocation.display_address[0]
            const addressLine2 = restLocation.display_address[1]
            const addressLine3 = restLocation.display_address[2]
            const lat = restCoordinates.latitude
            const long = restCoordinates.longitude
            if (restName === this.state.chosenName) {
                console.log(addressLine1, addressLine2, addressLine3)
                this.setState({
                    chosenId: restId,
                    chosenImage_url: restImageUrl,
                    chosenRating: restRating,
                    chosenLat: lat,
                    chosenlong: long,
                    chosenPrice: restPrice,
                    chosenAddress1: addressLine1,
                    chosenAddress2: addressLine2,
                    chosenAddress3: addressLine3,
                    chosenCategories: restCategories,
                    chosenPhoneNum: restPhoneNum,
                    chosenYelpUrl: yelpUrl
                })
            }
        }
    }

    getRestaurantData = (cb) => {
        API.getRandomResturant()
            .then(res => {
                let apiDataArr = []
                let nameArr = []
                res.data.forEach(business => {
                    const { name, id, image_url, rating, coordinates, price, location, categories, display_phone, url } = business
                    nameArr.push(name)
                    apiDataArr.push({ restName: name, restId: id, restImageUrl: image_url, restRating: rating, restCoordinates: coordinates, restPrice: price, restLocation: location, restCategories: categories, restPhoneNum: display_phone, yelpUrl: url })
                    this.setState({
                        options: nameArr,
                        apiData: apiDataArr
                    }, () => {
                        cb()
                    })
                })
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

    render() {
        return (
            <div>
                {/* {this.getLocation()} */}
                {this.renderWheel()}
            </div>
        )
    }
}
export default HomeScreen