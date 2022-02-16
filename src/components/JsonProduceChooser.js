import React from 'react'
import { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

let produceValue
const JsonProduceChooser = ({ onSelect, index }) => {
  let this_index = index
  const [value, setValue] = useState(null);
  const handleSelect = (e) => {
    setValue("Produce:" + e);
    onSelect("Produce:" + e)
  };


  if (value === null) {
    produceValue = "Carrot";
  } else {
    produceValue = value;
  }


  let [produceList, setProduceList] = useState([]);

  //connect to backend server
  useEffect(() => {
    fetch(`https://wonkyboxnz-django.herokuapp.com/GetAllProduce`, {
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

  function updateText(toUpdate, newName) {
    toUpdate.textContent = newName
  }


  return (
    <div className="json-dropdown">
      <DropdownButton
        alignleft="true"
        title="Select Produce"
        id={"json-dropdown-produce-" + this_index}
        onSelect={handleSelect}>

        {produceList.map((singleProduce) =>
          (<Dropdown.Item eventKey={singleProduce.name} onClick={() => updateText(document.getElementById("json-dropdown-produce-" + this_index), singleProduce.name)}>{singleProduce.name}</Dropdown.Item>))}

      </DropdownButton>
    </div>
  )
}

export default JsonProduceChooser
