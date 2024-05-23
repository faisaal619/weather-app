const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props;
    
    return (
      <div className='cityComponent'>
        <img src="https://img.icons8.com/cute-clipart/128/000000/apple-weather.png" className='weatherLogo' />
        <span className='chooseCityLabel'>Find the Weather of your city</span>
        <form className='searchBox' onSubmit={fetchWeather}>
          <input placeholder='City' onChange={(event) => updateCity(event.target.value)} />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }

  export default CityComponent;