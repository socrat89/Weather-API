import React from 'react';
import "./Form.style.css";
const Form=props=>{
return(
<div className="container">
    <div>{props.error ? error():null}</div>
    <form onSubmit={props.loadweather}>
    <div className="row">
        <div className="aa">
        <div className="col-md-3 offset-md-2">
            <input 
             type="text"
             className="bb" 
             name="city" 
             autoComplete="off"
             placeholder="City"/>
        </div>
        <div className="col-md-3">
        {/*<input 
        type="text" 
        className="form-control" 
        name="country" 
        autoComplete="off"
        placeholder="Country"/>*/}
        </div>
        <div className="col-md-3 mt-md-0 py-2 text-md-left">
        <button className="buttonn">FIND WEATHER</button>
        </div>
        </div>
    </div>
    </form>
</div>
);
};
function error(){
    return(
        <div className="alert aleart aleart-danger mx-5" role="alert">
            Please Enter City
        </div>
    );
}
export default Form;