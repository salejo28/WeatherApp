import React from 'react'
import axios from 'axios'

import api from './Api';

import Card from './components/Card'
import Loading from './components/Loading/Loading'
import './App.css'

class App extends React.Component {

    state = {
        coords: {},
        data: {},
        dataForecast: {},
        loading: true
    }

    componentDidMount() {
        this.getLocation()
        setTimeout(() => {
            this.getDataCurrent()
            this.getDataForecast()
        }, 2000)
    }

    getLocation() {
        let longitude;
        let latitude
        const success = (position) => {
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

    async getDataCurrent() {
        const { coords } = this.state
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${api.API_KEY}`
            const res = await axios.get(url)
            this.setState({
                data: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    async getDataForecast() {
        const { coords } = this.state
        try {
            let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${api.API_KEY}`
            const res = await axios.get(url)
            this.setState({
                dataForecast: res.data,
                loading: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { data, loading, dataForecast } = this.state
        if (loading) return <Loading />
        return (
            <div className="container">
                <Card data={data} dataForecast={dataForecast} loading={loading} />
            </div>
        )
    }

}

export default App;
