import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Produce.css";
import { useState, useEffect } from "react";

const ProducePage = ({}) => {
  //get id/name when list is clicked
  const { name } = useParams();
  const { id } = useParams();

  let [produce, setProduce] = useState([]);

  //connect to backend server
  useEffect(() => {
    fetch(`http://localhost:8000/produce/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setProduce(resp))
      .catch((error) => console.log(error));
  }, [id]);

  // const produceName = produce.name;

  return (
    <div className="producebox">
      <div className="producelist">
      <header className="producetitle">
         <h2>{produce.name}</h2>
         </header>
          <h2>{produce.category}</h2>
          <h2>{produce.description}</h2>
          <h2>{produce.seasonal_information}</h2>
        <div className="produceImage"> <img src={"http://127.0.0.1:8000/static/Carrots.png"} width="100" height="100" className="d-inline-block align-top" alt="" /></div>
      </div>
    </div>
  );
};

export default ProducePage;
