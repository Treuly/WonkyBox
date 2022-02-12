import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const RegionChooser = (props) => {

    const [value,setValue]=useState('Wellington');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }


  return (
    <div className="App container">
      
    <DropdownButton
    alignRight
    title="Region"
    id="dropdown-menu-align-right"
    class="btn btn-info dropdown-toggle"
    onSelect={handleSelect} 
      >
            <Dropdown.Item eventKey="Northland">Northland</Dropdown.Item>
            <Dropdown.Item eventKey="Auckland">Auckland</Dropdown.Item>
            <Dropdown.Item eventKey="Taranaki">Taranaki</Dropdown.Item>
            <Dropdown.Item eventKey="Bay of Plenty">Bay of Plenty</Dropdown.Item>
            <Dropdown.Item eventKey="Gisborne">Gisborne</Dropdown.Item>
            <Dropdown.Item eventKey="Waikato">Waikato</Dropdown.Item>
            <Dropdown.Item eventKey="Hawkes Bay">Hawkes Bay</Dropdown.Item>
            <Dropdown.Item eventKey="Manawatu-Wanganui">Manawatu-Wanganui</Dropdown.Item>
            <Dropdown.Item eventKey="Wellington">Wellington</Dropdown.Item>
    </DropdownButton>
    <h3> {props.getRegion(value)} {value}</h3>
    {/* <button onClick={()=>} >Click Me</button> */}
  </div>
);
}


export default RegionChooser


