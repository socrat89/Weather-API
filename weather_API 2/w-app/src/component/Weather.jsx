import React from 'react';
import "./Hourlyweather";
import "./Form.style.css";
import "./Weather.style.css";
// import Hourlyweather from './hourlyweather';
// x=props.weatherIcon;
//${props.weatherIcon}
const Weather=(props)=>{
    return(
        <div className="container">
            
            <div className="cards pt-4">
            {/* <h1>{props.city},{props.country}</h1> */}
            <h1>{props.city}</h1>
            <h5 className="py-4">
            <i className={`wi ${props.weatherIcon} display-1`}/>
            </h5>
            <h4 className="description py-3">{props.description}</h4>
            {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}&deg;</h1>):null}
            {/**show max and min temp */}
            {minmaxTemp(props.temp_min,props.temp_max)}
            <h5 className="lightfont"><span className="boldd">Humidity</span>   {props.humidity} %  &nbsp;&nbsp;&nbsp;  <span className="boldd">Pressure</span>     {props.pressure}</h5>
{/* --------------------------------------------------- */}
            {/* <div className="row" >hourly
            <h5 className="py-2">
            <i className={`wi ${props.weatherIcon} display-6`}/>
            </h5>
            {props.temp_celsius ? (<h1>{props.temp_celsius}&deg;</h1>):null}
            
            </div> */}
  {/* --------------------------test2-------------- */}
     
            </div>
        </div>
    );
};

function minmaxTemp(min,max){
    if(min&&max){
    return(
        <h3>
            <strong>Temperature</strong>
            <span className="lightfont px-4">{min}&deg;</span>
            to
            <span className="lightfont px-4">{max}&deg;</span>
        </h3>
    );
    }
// }
// function weatherhourly(props){
//     const t=[{time:"3",iconnow:'${props.weatherIcon}',tempnow:'${x.temp_celsiu}'}];//,{time:"6"},{time:"9"},{time:"12"},{time:"15"},{time:"18"},{time:"21"}];
    // return(
    // {
    //     t.map((e))=>{
    //         return
    //     }
    // }
    // )
}

export default Weather;