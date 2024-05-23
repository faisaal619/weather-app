
import WeatherInfoIcons from "./WeatherInfoIcons";

const WeatherInfoComponent = (props) => {
    const { name, value } = props;
    
    return (
      <div className='infoContainer'>
        <div className='infoIcon'>
          {WeatherInfoIcons[name]}
        </div>
        <span className='infoLabel'>
          {value}
          <span>{name}</span>
        </span>
      </div>
    );
  
  }

  export default WeatherInfoComponent;