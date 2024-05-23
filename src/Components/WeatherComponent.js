
import WeatherIcons from "./WeatherIcons";
import WeatherInfoComponent from "./WeatherInfoComponent";
const WeatherComponent = (props) => {
    const { weather } = props;
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime = (timeStamp) => {
      return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    
    return (
      <div className='weatherComponent'>
        <div className='weatherCondition'>
          <span className='condition'><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{` | ${weather?.weather[0].description}`}</span>
          {WeatherIcons[weather?.weather[0].icon]}
        </div>
        <span className='location'>{`${weather?.name}, ${weather?.sys?.country}`}</span>
        <span className='weatherInfoLabel'>Weather info</span>
        <div className='weatherInfoContainer'>
          <WeatherInfoComponent name={ isDay ? "sunset" : "sunrise" } value={getTime(weather?.sys[isDay ? 'sunset' : 'sunrise'])} />
          <WeatherInfoComponent name='humidity' value={weather?.main?.humidity} />
          <WeatherInfoComponent name='wind' value={weather?.wind?.speed} />
          <WeatherInfoComponent name='pressure' value={weather?.main?.pressure} />
        </div>

<button>	<a href="/componments/CityComponment">Search another City</a></button>
      </div>
    );
  }




  export default WeatherComponent;