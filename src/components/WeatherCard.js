import React from 'react';
import { Card, CardImg, CardText, CardBody, Row, Col } from 'reactstrap';
import '../App.css';
import Humid from './LottieComponents/Humid';
import Wind from './LottieComponents/Wind';

const WeatherCard = ({ cityData, iconUrl }) => {
    return (
        <div className="weather-card">
            <Card>
                <CardImg src={iconUrl + cityData.weather.summary.icon + '@2x.png'} alt="Card image cap" />
                <CardBody>
                    <CardText>
                        <div className="temperature">{(cityData.weather.temperature.actual - 273.15).toFixed(1)} °C</div>
                        <div className="city-name">{cityData.name}, Turkey </div>
                        <div className="desc">{cityData.weather.summary.description.toUpperCase()}</div>
                        <Row>
                            <Col xs="3"></Col>
                            <Col xs="2"><Wind /></Col>
                            <Col xs="4">{cityData.weather.wind.speed} Mps</Col>
                            <Col xs="3"></Col>
                        </Row>

                        <Row>
                            <Col xs="3"></Col>
                            <Col xs="2"><Humid /></Col>
                            <Col xs="3">{cityData.weather.clouds.humidity}%</Col>
                            <Col xs="4"></Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default WeatherCard;