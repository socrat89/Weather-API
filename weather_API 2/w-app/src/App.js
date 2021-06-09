import React, { Component } from 'react';
import './App.css';
import Weather from './component/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from './component/Form.component.jsx';
import Hourlyweather from './component/Hourlyweather';



//api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
const APIkey="266ee41fcb7c9137df50b0d49662e958";
// ---------------------------------------------------------------------------


// -----------------------------------------------------------------------
class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      //country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      humidity:undefined,
      pressure:undefined,
      hours:[],
      error:false
    };
    

    this.weatherIcon={
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atomosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"
    }
  }

calcCelsius(temp){
  let cell=Math.floor(temp);//-273.15);
  return cell;
}

get_WeatherIcon(icons,rangeid){
  switch(true){
    case rangeid>=200&&rangeid<=232:
      return this.setState({icon:this.weatherIcon.Thunderstorm});
      
      case rangeid>=300&&rangeid<=321:
      return this.setState({icon:this.weatherIcon.Drizzle});
      
       case rangeid>=500&&rangeid<=531:
        return this.setState({icon:this.weatherIcon.Rain});
  
       case rangeid>=600&&rangeid<=622:
        return this.setState({icon:this.weatherIcon.Snow});
      
       case rangeid>=701&&rangeid<=781:
        return this.setState({icon:this.weatherIcon.Atomosphere});
      
       case rangeid===800:
        return this.setState({icon:this.weatherIcon.Clear});
      
       case rangeid>=800&&rangeid<=804:
        return this.setState({icon:this.weatherIcon.Clouds});
    
      default:
        return this.setState({icon:this.weatherIcon.snow});
  }
}

  getWeather=async(e)=>{
    e.preventDefault();

    const city=e.target.elements.city.value;
    //`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`+APIkey
    //const country=e.target.elements.country.value;
//http://api.openweathermap.org/data/2.5/forecast?q=$%7BCITY_NAME%7D&cnt=8&units=metric&appid=$%7BYOUR_API_KEY%7D
    //'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid='+APIkey);
    //http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=${YOUR_API_KEY}
    if(city)
    {
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=`+APIkey
      );
    const response=await api_call.json();

    // console.log("hasan",response.weather[0]);
    console.log(response);
    
    this.setState({
      // city:response.name,
      city:response.city.name,
      //country:response.sys.country,
      celsius:this.calcCelsius(response.list[0].main.temp),
      temp_max:this.calcCelsius(response.list[0].main.temp_max),
      temp_min:this.calcCelsius(response.list[0].main.temp_min),
      description:response.list[0].weather[0].description,
      humidity:response.list[0].main.humidity,
      pressure:response.list[0].main.pressure,
      hours:response.list,
      
      error:false
      
    });
    
    this.get_WeatherIcon(this.weatherIcon,response.list[0].weather[0].id);
    
  }else{
    this.setState({error:true})
  }
  }
  
  render(){
    return(
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error}/>

        <Weather 
        city={this.state.city} 
        //country={this.state.country} 
        temp_celsius={this.state.celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}
        humidity={this.state.humidity}
        pressure={this.state.pressure}
        

        />
        
        <Hourlyweather 
        hours={this.state.hours}
        weatherIcon={this.state.icon}
        
        />
      </div>
      // -----------------

      // -----------------
    );
    
  }
}

export default App;


