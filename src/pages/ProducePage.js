import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Produce.css";
import { useState, useEffect } from "react";

const ProducePage = () => {
  //get id/name when list is clicked
  const { name } = useParams();

  //produce array
  let [produce, setProduce] = useState([]);

  //connect to backend server
  useEffect(() => {
    fetch(`https://wonkyboxnz-django.herokuapp.com/GetSingleProduce?name=${name}`, {
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
          <h1 className="title">{produce.name}</h1>
        </header>
        <h2 >{produce.category}</h2>
        <br />
        <h3 className="title">Description</h3>
        <h4>{produce.description}</h4>
        <br />
        <h3 className="title">Seasonal Information</h3>
        <h4>{produce.seasonal_information}</h4>
        <br />
        <h3 className="title">Storage Tips</h3>
        <h4>{produce.storage}</h4>
        <br />
        <h3 className="title"> Additional Information</h3>
        <h4>{produce.additional_information}</h4>

        <div className="produceImage"> <img src={`https://wonkyboxnz-django.herokuapp.com/media/${produce.image}`} width="200" height="250" className="d-inline-block align-top" alt="" /></div>
      </div>
    </div>
  );
};

export default ProducePage;
