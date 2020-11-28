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
      .get(`${API.BASE}/weather?q=${city}&appid=${API.KEY}`)
      // .then(res => res.json())
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
          <div className="mainTitle">
            <br></br>
            <h1>React Weather App Using only Hooks</h1>
            <h2>Please Enter your City </h2>
            {/* <br></br> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="search-box">
          <div className="">
            <br></br>
            <input 
              type="text"
              placeholder="Search....."
              onChange={e=> setCity(e.target.value)}
              value={city}
            />
          </div>
        </div>
      </div>
      <div className="card">
      {(typeof data.main != "undefined") ? (
        <div className="row">
        
          <div className="col-md-12">
            <div className="col-md-4">
              <h3>City Name</h3>
              <p>{data.name}</p>
            </div>
            <div className="col-md-4">
              <h3>Temparature</h3>
              <p>{Math.round(data.main.temp)} </p>
            </div>
            <div className="col-md-4">
              <h3>Feels Like</h3>
              <p>{Math.round(data.main.feels_like)} </p>
            </div>

            <div className="col-md-4">
              <h3>Humidity(%)</h3>
              <p>{data.main.humidity}</p>
            </div>
            

            <div className="col-md-4">
              <h3></h3>
              <p>{}</p>
            </div>
          </div>
      
        </div>
      ) : ('')}
      </div>
    </div>
  );
}

export default App;
