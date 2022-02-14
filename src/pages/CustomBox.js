import React from "react";
import { useState, useEffect, useRef } from "react";
import ProduceContainer from "../components/ProduceContainer";


const CustomBox = ({onClick, style, day, region, highlight}) => {
  //define produce array state
  const [weeklyBox, setWeeklyBox] = useState([]);
  //define error messages 
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/GetWeeklyBox/?day=${day}&region=${region}`, {
            method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer awXpFWmbbjcKzveLhJh4aHBW7ChQVLUrY836j63mRGoWr2JnsazMJgFzemgjhqE6FDMUXtaADb2AG3Xxjq`,
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
          highlight={highlight}
        />
      </div>
      </div>
  );
};

export default CustomBox;
