import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ location, temperature, weather, icon }) => {
  return (
    <div className="weather-card">
      <div className="location">{location}</div>
      <div className="temperature">{temperature}</div>
      <div className="weather">{weather}</div>
      <img src={icon} alt="Weather Icon" className="weather-icon" />
    </div>
  );
};

export default WeatherCard;