import React from 'react';
import axios from 'axios'

export default class Card extends React.Component {

    state = {
        coords: {},
        data: {}
    }

    componentDidMount() {
        this.getLocation()
        this.getData()
    }

    async getData() {
        let uri = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=30b3231a0d97a0e8cc38a3c0458f94dc'
        const res = await axios.get(uri)
        console.log(res);
    }

    getLocation() {
        let longitude;
        let latitude
        const  success = (position) => {
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            this.setState({
                coords: {
                    lon: longitude,
                    lat: latitude
                }
            })
        }
        function error() {
            alert('No se pudo')
        };

        navigator.geolocation.getCurrentPosition(success, error)
    }

    render() {
        const { coords } = this.state
        //console.log(coords)
        return (
            <h1>Card</h1>
        )
    }

}