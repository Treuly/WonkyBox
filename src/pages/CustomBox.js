import React from "react";
import { useState, useEffect, useRef } from "react";
import ProduceContainer from "../components/ProduceContainer";


const CustomBox = ({onClick, style, day, region}) => {
  //define produce array state
  const [weeklyBox, setWeeklyBox] = useState([]);
  //define error messages 
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/GetWeeklyBox/?day=${day}&region=${region}`, {
        // fetch(`http://127.0.0.1:8000/GetWeeklyBox/?day=${chosenDay}&region=${chosenRegion}`, {
            method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(resp => {
        if(!resp.ok){
          throw Error('no box for this day/region, choose other options')
        }
        return resp.json()
      })
      .then(resp=>{
         setWeeklyBox(resp)
         setError(null)
        })
      .catch(error => {
        setError(error.message);
        setWeeklyBox("empty");
      })
  }, [day, region]);


  return (
    <div>
      {/* Lists foor weeklybox Produce */}
      <div ><h4>{ error && <div className="error">{error}</div>}</h4></div> 
      <div className="produceContainer">
        <ProduceContainer
          produceList={weeklyBox.produce}
          onClick={onClick}
          style={style}
        />
      </div>
      </div>
  );
};

export default CustomBox;
