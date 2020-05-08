import React,{ useState, useEffect } from 'react';
import './App.css';
const api = {
  key: '4dd23b28fb57078c0d5ec9c653e203b2',
  url:'https://api.openweathermap.org/data/2.5/weather'
}

function App() {

  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState('');

  const search = (e) => {
      if(e.key === 'Enter'){
        fetch(`${api.url}?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then((response) => {
          setWeather(response)
          console.log(weather)
          setQuery('')
        })
      }
    }
 




  return (
    <div className={(typeof weather.main !== 'undefined')? ((weather.main.temp > 16)? 'App warm': 'App'):
     "App"}>
      <main>
        <h1>Weather App</h1>
        <div className='search-box'>
          <input 
            type='text' 
            className='search-input' 
            placeholder='Search for place...' 
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div> 
        {weather.main !== undefined ?
           <div>
        <div className='location-box'>
        <div className='location'>{weather.name},{weather.sys.country}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>{Math.round(weather.main.temp)}°c</div>
          <div className='weather'>{weather.weather[0].main}</div>
        </div>
        </div>
        : ''}

      </main>
    </div>
  );
}

export default App;
