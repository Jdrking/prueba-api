import React from 'react';
import WeatherCard from './WeatherCard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Weather Dashboard</h1>
        <p>Today's Date: 21/09/2023</p>
      </div>
      <div className="weather-cards">
        <WeatherCard
          location="New York"
          temperature="22°C"
          weather="Partly Cloudy"
          icon="sun.png"
        />
        <WeatherCard
          location="Los Angeles"
          temperature="28°C"
          weather="Sunny"
          icon="sun.png"
        />
        <WeatherCard
          location="Chicago"
          temperature="15°C"
          weather="Rainy"
          icon="rain.png"
        />
        <WeatherCard
          location="Miami"
          temperature="30°C"
          weather="Clear"
          icon="sun.png"
        />
      </div>
    </div>
  );
};

export default Dashboard;
