import React from "react";
import { useState, useEffect, useRef } from "react";
import ProduceContainer from "../components/ProduceContainer";



//variable for day and region
// let chosenRegion;
// let chosenDay;

const CustomBox = ({onClick, style, day, chosenRegion}) => {
  //define produce array state
  let [weeklyBox, setWeeklyBox] = useState([]);
  



  useEffect(() => {
    fetch(`http://127.0.0.1:8000/GetWeeklyBox/?day=${day}&region=Wellington`, {
        // fetch(`http://127.0.0.1:8000/GetWeeklyBox/?day=${chosenDay}&region=${chosenRegion}`, {
            method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setWeeklyBox(resp))
      .catch((error) => console.log(error));
  }, [day]);


  return (
    <div>
      {/* Lists foor weeklybox Produce */}
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
