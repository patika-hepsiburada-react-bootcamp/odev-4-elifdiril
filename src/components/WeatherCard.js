import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../App.css';

const WeatherCard = ({ cityData, iconUrl }) => {
    return (
        <div className="weather-card">
            <Card>
                <CardImg width="10%" src={iconUrl + cityData.weather.summary.icon + '@2x.png'} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Weather</CardTitle>
                    <CardText>
                        {(cityData.weather.temperature.actual - 273.15).toFixed(1)}
                        <br />
                        {cityData.name}
                        <br />
                        {cityData.weather.summary.description}
                        <br />
                        {cityData.weather.wind.speed} Mps
                        <br />
                        {cityData.weather.clouds.humidity}%
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default WeatherCard;