import { useQuery } from '@apollo/client';
import { WEATHER_QUERY } from './queries';
import '../App.css';
import WeatherCard from './WeatherCard';
import { Spinner } from 'reactstrap';

function Weather({ selectedCity }) {
    const iconUrl = 'http://openweathermap.org/img/wn/';
    
    //set city data from weather query
    const { loading, error, data } = useQuery(WEATHER_QUERY, {
        variables: { name: selectedCity }
    });

    if (loading) {
        return <div className="spinner-style"><Spinner style={{ width: '5rem', height: '5rem', marginTop: '17%' }} />{' '}</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    //call weather card according to selected city
    let cityData = data.getCityByName;
    return (
        <WeatherCard cityData={cityData} iconUrl={iconUrl} />
    );
}
export default Weather;
