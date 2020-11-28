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
      .then(res =>{
        console.log(res);
        setData(res.data);
      })
      .catch(err =>{
        console.log(err);
      })
  }, [city])

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="mainTitle">
            <br></br>
            <h1>React Weather App Using only Hooks</h1>
            <h2>Please Enter your City </h2>
            {/* <br></br> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="search-box">
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
      <div className="row">
        <div className="col-lg-12">
          <div className="col-md-4">{data.timezone}</div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>

          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
