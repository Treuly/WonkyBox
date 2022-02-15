import React from 'react'
import { useParams } from "react-router-dom";
import "../styles/Produce.css";
import { useState, useEffect } from "react";


const FarmPage = ({}) => {

    const {name} = useParams();
    // const { id } = useParams();
    console.log(name)

    let [farm, setFarm] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/GetSingleFarm/?name=${name}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer awXpFWmbbjcKzveLhJh4aHBW7ChQVLUrY836j63mRGoWr2JnsazMJgFzemgjhqE6FDMUXtaADb2AG3Xxjq`,
            Accept: "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((resp) => setFarm(resp))
          .catch((error) => console.log(error));
      }, [name]);
    
    
  console.log(farm.produces)
  return (
      <div>
    <div className="producebox">
      <div className="producelist">
      <header className="producetitle">
         <h1>{farm.name}</h1>
         </header>  
         <br/>
         <h3>Location</h3>
          <h4>{farm.location}</h4>
          <br/>
          <h3>Description</h3>
          <h4>{farm.description}</h4>
          <br/>
          <h3>Our Produce</h3>
          <h4>{farm.produces}</h4>
          <br/>
          <h3>Our Story</h3>
          <h4>{farm.farmers_story}</h4>
          <div className="produceImage"> <img src={`http://127.0.0.1:8000/media/${farm.image}`} width="300" height="300" className="d-inline-block align-top" alt="" /></div>

      </div>

    </div>

    </div>

  );
};

export default FarmPage

