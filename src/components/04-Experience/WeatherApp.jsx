import React, { useState, useReducer } from 'react'
import Cloud from '../../images/weather-app.jpg'
import Sunny from '../../images/sunny.jpg'
import Cloudy from '../../images/cloudy.jpg'
import Rainy from '../../images/rainy.jpg'

const initialBackground = ({backgroundImage: `url(${Cloud})`,
                            backgroundSize: 'cover'})

const reducer = (state, action) => {
    switch (action.type) {
        case 'borús égbolt':
            return (
                {backgroundImage: `url(${Cloudy})`, 
                backgroundSize: 'cover'})
        case 'szórványos felhőzet':
            return (
                {backgroundImage: `url(${Cloud})`, 
                backgroundSize: 'cover'})
        case 'erős felhőzet':
            return (
                {backgroundImage: `url(${Cloud})`, 
                backgroundSize: 'cover'})
        case 'tiszta égbolt':
            return (
                {backgroundImage: `url(${Sunny})`, 
                backgroundSize: 'cover'})
        case 'kevés felhő':
            return (
                {backgroundImage: `url(${Sunny})`, 
                backgroundSize: 'cover'})
        case 'közepes eső':
            return (
                {backgroundImage: `url(${Rainy})`, 
                backgroundSize: 'cover'})
        case 'enyhe eső':
            return (
                {backgroundImage: `url(${Rainy})`, 
                backgroundSize: 'cover'})
        case 'szitálás':
            return (
                {backgroundImage: `url(${Rainy})`, 
                backgroundSize: 'cover'})
        default:
            return state = initialBackground
    }
}

/**
* Weather App

* Időjárás lekérdező app, mely beírt város alapján 
* kiírja az aktuális hőmérsékletet.
@returns {React.Component} - WeatherApp componens
* * Validálva
*/
function WeatherApp() {
    const apiKey = process.env.REACT_APP_WEATHER_API
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    /*eslint max-len: ["error", { "ignoreUrls": true }]*/
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=hu&units=metric&APPID=${apiKey} `

    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(url).then(
                response => response.json())
            .then(
                data => {
                    setWeatherData(data)
                    setCity("")
                    dispatch ({type: data.weather[0].description})
                })
            
        }
    }

    const [state, dispatch] = useReducer(reducer, initialBackground)
   
  return (

    <div className='weather border-shadow p-2 mt-5 col-12'
            style={state}>
            <h3 className='fs-4 text p-2'>Időjárás app</h3>
             <input 
            className='weather-input mt-1' 
            placeholder='Adjon meg egy Város nevet...' 
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            />
        {typeof weatherData.main === 'undefined' ? (
            <div className='p-4'>
                <p>Üdvözlöm az időjárás appon! Kérem írja be a várost.</p>
            </div>
        ): (
            <div className='p-2'>
                    <p className='fs-5 text'>
                        {weatherData.name}, {weatherData.sys.country}
                    </p>
                <div className='row d-flex align-items-center'>
                    <p className='col-12 col-lg-6 col-xxl-12 display-5'>
                        {Math.round(weatherData.main.temp)} °C
                    </p>
                <p className='col-12 col-lg-6 col-xxl-12 fs-4 text'>
                    Hőérzet: {Math.round(weatherData.main.feels_like)} °C 
                </p>
                </div>
                <p className='fs-3 text'>
                    {weatherData.weather[0].description}
                </p>
            </div>
        )}
      
    </div>
  )
}

export default WeatherApp
