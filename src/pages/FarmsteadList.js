import React from 'react'
import { useState, useEffect } from "react";
import Farm from '../components/Farm';
import "../styles/Produce.css";


const FarmsteadPage = () => {

    let [farmList, setFarmList] = useState([]);

    //connect to backend server
    useEffect(() => {
      fetch(`http://localhost:8000/GetFarmInfo/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => setFarmList(resp))
        .catch((error) => console.log(error));
    }, []);
  
  
  return (
      <div className="producebox">
      <header className="producetitle">
          <h2>OUR FARMERS</h2>
          </header>
      <div className = 'producelist'>
              {/* Make new list from array items for UI showing only produce name */}
              {farmList.map((farm) => 
              (<Farm key={farm.id} farm={farm} />))}
      </div>
      </div>

  )
}

export default FarmsteadPage
