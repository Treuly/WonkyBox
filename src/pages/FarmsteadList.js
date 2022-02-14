import React from 'react'
import { useState, useEffect } from "react";
import SingleFarm from '../components/SingleFarm';
import "../styles/Produce.css";


const FarmsteadPage = () => {

    let [farmList, setFarmList] = useState([]);

    //connect to backend server
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/GetAllFarms`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer awXpFWmbbjcKzveLhJh4aHBW7ChQVLUrY836j63mRGoWr2JnsazMJgFzemgjhqE6FDMUXtaADb2AG3Xxjq`,
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
              (<SingleFarm key={farm.id} singleFarm={farm} />))}
      </div>
      </div>

  )
}

export default FarmsteadPage
