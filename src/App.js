import './App.css';
import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap';
import Axios from 'axios';

//material UI import 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ss1 from './img/img1.jpg';
import ss2 from './img/img2.jpg';
import ss3 from './img/img3.jpg';
import ss4 from './img/img4.jpg';
import ss5 from './img/img5.jpg';
import ss6 from './img/img6.jpg';
import ss7 from './img/img7.jpg';
import ss8 from './img/img8.jpg';
import ss9 from './img/img9.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
});

const API = {
  KEY: "a688d4e186c7e13375ae2f8b44a585ea",
  BASE: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [data, setData] = useState({})
  const [city, setCity] = useState('')

  //material UI styles
  const classes = useStyles();

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
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="150"
                          image={ss1}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h1">
                            City Name: {data.name}
                          </Typography>
                          
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                  <div className="col-md-4">
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="150"
                            image={ss2}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h1">
                              Temparature: {Math.round(data.main.temp)}&#8451;
                            </Typography>
                            
                          </CardContent>
                        </CardActionArea>
                      </Card>
                  </div>
                  <div className="col-md-4">
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="150"
                            image={ss3}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h1">
                              Feels Like: {Math.round(data.main.feels_like)}&#8451;
                              {/* Humidity: {data.main.humidity}% */}
                            </Typography>
                            
                          </CardContent>
                        </CardActionArea>
                      </Card>
                  </div>
                </div>
              </div>
            ) : ('')}

            {(typeof data.sys != "undefined") ? (
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="150"
                            image={ss4}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h1">
                              Country code: {data.sys.country}
                            </Typography>
                            
                          </CardContent>
                        </CardActionArea>
                      </Card>
                  </div>
                  <div className="col-md-4">
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="150"
                            image={ss5}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h1">
                              Humidity: {data.main.humidity}%
                              {/* Sunrise Time: {data.sys.sunrise}UTC */}
                            </Typography>
                            
                          </CardContent>
                        </CardActionArea>
                      </Card>
                  </div>
                  <div className="col-md-4">
                    <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="150"
                            image={ss6}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h1">
                              Wind Speed: {data.wind.speed} m/sec
                              {/* Sunset Time: {data.sys.sunset}UTC */}
                            </Typography>
                            
                          </CardContent>
                        </CardActionArea>
                      </Card>
                  </div>
                </div>
              </div>
            ) : ('')}


            {( (typeof data.weather != "undefined") && (typeof data.coord != "undefined") ) ? (
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="150"
                            image={ss7}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h1">
                              Cloudiness: {data.clouds.all}%
                            </Typography>
                            
                          </CardContent>
                        </CardActionArea>
                      </Card>
                  </div>

                  <div className="col-md-4">
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="150"
                            image={ss8}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h1">
                              City Longitude Loc: {data.coord.lon}
                            </Typography>
                            
                          </CardContent>
                        </CardActionArea>
                      </Card>
                  </div>

                  <div className="col-md-4">
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="150"
                            image={ss9}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              City Latitude Loc: {data.coord.lat}
                            </Typography>
                            
                          </CardContent>
                        </CardActionArea>
                      </Card>
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

