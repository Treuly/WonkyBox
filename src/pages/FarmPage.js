import React from 'react'
import { useParams } from "react-router-dom";
import "../styles/Produce.css";
import { useState, useEffect } from "react";


const FarmPage = ({}) => {

    // const { name } = useParams();
    const { id } = useParams();
    console.log(id)

    let [farm, setFarm] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/farm/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((resp) => setFarm(resp))
          .catch((error) => console.log(error));
      }, [id]);
    
    
  console.log(farm.produces)
  return (
      <div>
    <div className="producebox">
      <div className="producelist">
      <header className="producetitle">
         <h2>{farm.name}</h2>
         </header>
          <h2>{farm.location}</h2>
          <h2>{farm.description}</h2>
          <h2>{farm.produces}</h2>
      </div>
    </div>
    <div> <img src={"http://127.0.0.1:8000/static/Banner.png"} width="800" height="150" className="d-inline-block align-top" alt="" /></div>

    </div>

  );
};

export default FarmPage

