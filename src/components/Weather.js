import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { WEATHER_QUERY } from './queries';
import '../App.css';
// http://openweathermap.org/img/wn/01d@2x.png
// C = K - 273.15


function Weather({ selectedCity }) {
    const iconUrl = 'http://openweathermap.org/img/wn/';
    const [modal, setModal] = useState(false);
    const { loading, error, data } = useQuery(WEATHER_QUERY, {
        variables: { name: selectedCity }
    });
    const toggle = () => setModal(!modal);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    let cityData = data.getCityByName;
    return (
        <div className="city" onClick={toggle}>
            <img src={iconUrl + cityData.weather.summary.icon + '@2x.png'} alt="" className="city-img" />
            {(cityData.weather.temperature.actual - 273.15).toFixed(1)}
            <br />
            {cityData.name}
            <br />
            {cityData.weather.summary.description}
            <br/>
            {cityData.weather.wind.speed} Mps
            <br/>
            {cityData.weather.clouds.humidity}%
        </div>
    );
}
export default Weather;