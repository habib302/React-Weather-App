import './App.css';
import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap';
import Axios from 'axios';


const API = {
  KEY: "a688d4e186c7e13375ae2f8b44a585ea",
  BASE: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [data, setData] = useState({})
  const [city, setCity] = useState('')

  useEffect(() => {
    Axios
      // .get(`${API.BASE}/weather?q=${city}&appid=${API.KEY}`)
      .get(`${API.BASE}/weather?q=${city}&units=metric&appid=${API.KEY}`)
      .then(res =>{
        console.log(res);
        setData(res.data);
        // setCity('');
        console.log(data);
      })
      .catch(err =>{
        console.log(err);
      })
  }, [city])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header card-header-success">
              <h1 className="card-title">React Weather App Using only Hooks</h1>
              <h2 className="card-category">Please Enter your City</h2>
              <br></br>
              <form className="search-box">
                <input 
                  type="text"
                  placeholder="Search....."
                  onChange={e=> setCity(e.target.value)}
                  value={city}
                />
              </form>
            </div>
            {(typeof data.main != "undefined") ? (
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <h3>City Name</h3>
                    <p>{data.name}</p>
                  </div>
                  <div className="col-md-4">
                    <h3>Temparature</h3>
                    <p>{Math.round(data.main.temp)} &#8451;</p>
                  </div>
                  <div className="col-md-4">
                    <h3>Humidity</h3>
                    <p>{data.main.humidity} %</p>
                  </div>
                </div>
              </div>
            ) : ('')}

            {(typeof data.sys != "undefined") ? (
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <h3>Country code</h3>
                    <p>{data.sys.country}</p>
                  </div>
                  <div className="col-md-4">
                    <h3>Sunrise Time</h3>
                    <p>{data.sys.sunrise} UTC</p>
                  </div>
                  <div className="col-md-4">
                    <h3>Sunset Time</h3>
                    <p>{data.sys.sunset} UTC</p>
                  </div>
                </div>
              </div>
            ) : ('')}


            {(typeof data.wind != "undefined") ? (
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <h3>Wind Speed</h3>
                    <p>{data.wind.speed} meter/sec</p>
                  </div>
                  <div className="col-md-4">
                    <h3>Wind Direction</h3>
                    <p>{data.wind.deg}</p>
                  </div>
                  <div className="col-md-4">
                    <h3>Wind Gust</h3>
                    <p>{data.wind.gust} meter/sec</p>
                  </div>
                </div>
              </div>
            ) : ('')}

            {(typeof data.coord != "undefined") ? (
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <h3>City Longitude Location</h3>
                    <p>{data.coord.lon}</p>
                  </div>
                  <div className="col-md-4">
                    <h3>City Latitude Location</h3>
                    <p>{data.coord.lat}</p>
                  </div>
                  
                </div>
              </div>
            ) : ('')}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
