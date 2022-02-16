import React from 'react'
import { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

let farmValue
const JsonFarmsteadChooser = ({ onSelect, index }) => {
  let this_index = index
  const [value, setValue] = useState(null);
  const handleSelect = (e) => {
    setValue("FarmStead:" + e);
    onSelect("FarmStead:" + e)
  };


  if (value === null) {
    farmValue = "Otaki Farms";
  } else {
    farmValue = value;
  }


  let [farmList, setFarmList] = useState([]);

  //connect to backend server
  useEffect(() => {
    fetch(`https://wonkyboxnz-django.herokuapp.com/GetAllFarms`, {
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

  function updateText(toUpdate, newName) {
    toUpdate.textContent = newName
  }


  return (
    <div className="json-dropdown">
      <DropdownButton
        alignleft="true"
        title="Select Farmstead"
        id={"json-dropdown-farm-" + this_index}
        onSelect={handleSelect}>

        {farmList.map((singleFarm) =>
          (<Dropdown.Item eventKey={singleFarm.name} onClick={() => updateText(document.getElementById("json-dropdown-farm-" + this_index), singleFarm.name)}>{singleFarm.name}</Dropdown.Item>))}

      </DropdownButton>
    </div>
  )
}

export default JsonFarmsteadChooser