import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Produce.css";
import { useState, useEffect } from "react";

const ProducePage = () => {
  //get id/name when list is clicked
  const { name } = useParams();

  let [produce, setProduce] = useState([]);

  //connect to backend server
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/GetSingleProduce?name=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer awXpFWmbbjcKzveLhJh4aHBW7ChQVLUrY836j63mRGoWr2JnsazMJgFzemgjhqE6FDMUXtaADb2AG3Xxjq`,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setProduce(resp))
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <div className="producebox">
      <div className="producelist">
      <header className="producetitle">
         <h2>{produce.name}</h2>
         </header>
          <h2>{produce.category}</h2>
          <h2>{produce.description}</h2>
          <h2>{produce.seasonal_information}</h2>
          <h2>{produce.image}</h2>

        <div className="produceImage"> <img src={`http://127.0.0.1:8000/media/produce_images/${produce.image}`} width="100" height="100" className="d-inline-block align-top" alt="" /></div>
      </div>
    </div>
  );
};

export default ProducePage;
