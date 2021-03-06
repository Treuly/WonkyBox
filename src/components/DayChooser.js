import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


let day;
const DayChooser = (props) => {

    const [value,setValue]=useState(null);
    const handleSelect=(e)=>{
      setValue(e)
    }
    
    if(value === null){
      day ="Friday"
    }else{
      day = value
    }


  return (
    <div className="App container">
      
    <DropdownButton
    alignright = "true"
    title="Day"
    variant="info"
    id="dropdown-menu-align-right"
    onSelect={(event) => handleSelect(event)}
      >
            <Dropdown.Item eventKey="Thursday">Thursday</Dropdown.Item>
            <Dropdown.Item eventKey="Friday">Friday</Dropdown.Item>
            {props.getDay(day)}
    </DropdownButton>
    <h4>{day}</h4>
  </div>
);
}

export default DayChooser


