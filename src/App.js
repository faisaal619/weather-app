import React from "react";
import   WeatherComponent from "./Components/WeatherComponent";
import   CityComponent from "./Components/CityComponent";
import Axios from "axios";
const API_KEY = '56a2c31c64a6247e0e851f88799c0dd5';

function App() {
  const [city, updateCity] = React.useState();
  const [weather, updateWeather] = React.useState();
  
  const fetchWeather = async (event) => {
    event.preventDefault();
    const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
  }
  
  return(
    <div className='container'>
      <span className='appLabel'>React Weather App</span>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;
