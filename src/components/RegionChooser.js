import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

let region;
const RegionChooser = (props) => {
  const [value, setValue] = useState(null);
  const handleSelect = (e) => {
    // console.log(e);
    setValue(e);
  };

  //set default value of region as Wellington
  if (value === null) {
    region = "Wellington";
  } else {
    region = value;
  }
  // console.log(region);

  return (
    <div className="App container">
      <DropdownButton
        alignright="true"
        title="Region"
        variant="info"
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Northland">Northland</Dropdown.Item>
        <Dropdown.Item eventKey="Auckland">Auckland</Dropdown.Item>
        <Dropdown.Item eventKey="Taranaki">Taranaki</Dropdown.Item>
        <Dropdown.Item eventKey="Bay of Plenty">Bay of Plenty</Dropdown.Item>
        <Dropdown.Item eventKey="Gisborne">Gisborne</Dropdown.Item>
        <Dropdown.Item eventKey="Waikato">Waikato</Dropdown.Item>
        <Dropdown.Item eventKey="Hawkes Bay">Hawkes Bay</Dropdown.Item>
        <Dropdown.Item eventKey="Manawatu-Wanganui">
          Manawatu-Wanganui
        </Dropdown.Item>
        <Dropdown.Item eventKey="Wellington">Wellington</Dropdown.Item>
        {props.getRegion(region)}
      </DropdownButton>
      <h4> {region}</h4>
    </div>
  );
};

export default RegionChooser;
