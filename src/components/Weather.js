import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { WEATHER_QUERY } from './queries';
import '../App.css';
import WeatherCard from './WeatherCard';

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
            <WeatherCard cityData={cityData} iconUrl={iconUrl} />
        </div>
    );
}
export default Weather;