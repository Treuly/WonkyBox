import React from 'react'
import { useState, useEffect } from "react";
import SingleProduce from '../components/SingleProduce';
import "../styles/Produce.css";


const ProduceList = () => {

    let [produceList, setProduceList] = useState([]);

    //connect to backend server
    useEffect(() => {
      fetch(`http://localhost:8000/GetAllProduce/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer awXpFWmbbjcKzveLhJh4aHBW7ChQVLUrY836j63mRGoWr2JnsazMJgFzemgjhqE6FDMUXtaADb2AG3Xxjq`,
          Accept: "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => setProduceList(resp))
        .catch((error) => console.log(error));
    }, []);
  
  
  return (
      <div className="producebox">
      <header className="producetitle">
          <h2>OUR PRODUCE</h2>
          </header>
      <div className = 'producelist'>
              {/* Make new list from array items for UI showing only produce name */}
              {produceList.map((singleProduce) => 
              (<SingleProduce key={singleProduce.id} singleProduce={singleProduce} />))}
      </div>
      </div>

  )
}

export default ProduceList
