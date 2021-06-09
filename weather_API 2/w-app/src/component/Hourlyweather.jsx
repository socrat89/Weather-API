import React, { Component } from 'react';

// import React from 'react';
class Hourlyweather extends Component{
    constructor(props){
        super(props);
            this.state={
                icon2:undefined,
                
                input:""

            };
            // this.weatherIcon2={
            //     Thunderstorm:"wi-thunderstorm",
            //     Drizzle:"wi-sleet",
            //     Rain:"wi-storm-showers",
            //     Snow:"wi-snow",
            //     Atomosphere:"wi-fog",
            //     Clear:"wi-day-sunny",
            //     Clouds:"wi-day-fog"
            //   }
        }
            //-------------------




            // get_WeatherIcon2(icons,rangeid){
            //     switch(true){
            //       case rangeid>=200&&rangeid<=232:
            //         return this.setState({icon:this.weatherIcon2.Thunderstorm});
                    
            //         case rangeid>=300&&rangeid<=321:
            //         return this.setState({icon:this.weatherIcon2.Drizzle});
                    
            //          case rangeid>=500&&rangeid<=531:
            //           return this.setState({icon:this.weatherIcon2.Rain});
                
            //          case rangeid>=600&&rangeid<=622:
            //           return this.setState({icon:this.weatherIcon2.Snow});
                    
            //          case rangeid>=701&&rangeid<=781:
            //           return this.setState({icon:this.weatherIcon2.Atomosphere});
                    
            //          case rangeid===800:
            //           return this.setState({icon:this.weatherIcon2.Clear});
                    
            //          case rangeid>=800&&rangeid<=804:
            //           return this.setState({icon:this.weatherIcon2.Clouds});
                  
            //         default:
            //           return this.setState({icon:this.weatherIcon2.snow});
            //     }
            //   }
            //-------------------
    
    render (){
         return(
            <div>
                { //${this.props.weatherIcon} 
                    this.props.hours.map(lsit=>
                        <li>
                        <div>
                            <h3>{new Date(lsit.dt_txt).getHours().toString() + ":00"}</h3>
                            {/* --------- */}
                            <h5 className="py-2">
                            {/* <i className={`wi ${this.props.get_WeatherIcon2(this.weatherIcon2,lsit.weather[0].id)} display-1`}/> */}
                            
                            <i className={`wi ${this.props.weatherIcon} display-6`}/>
                             </h5>
                            {/* --------- */}
                            <h3>{lsit.main.temp} <span>&deg;</span></h3>
                        </div>
                        </li>
                        )
                }

            </div>
         )       
    }
}
export default Hourlyweather;



//className="ppx"
//className="pp"
// // import React from 'react';
// const todayhour=[
//   {
//     time:"9",
//     icon:"",
//     tempnow:"{props.temp_celsius}"
//   },
//   {
//     name:"Yash",
//     rollNo:"124"
//   }
// ]
// export default todayhour;


// function App() {
  
//   return (
//     <div style={{margin:'40px'}} >
//      <h1 style={{color:'green'}}> Geeks For Geeks </h1>
       
// <p> Mapping Data to componenet in React js. </p>
  
//      {Users.map((e)=>{
//        return (
//        <Info name={e.name} rollNo={e.rollNo}/>
//      );})}
//     </div>
//   );
// }