import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const DayChooser = () => {

    const [value,setValue]=useState('Friday');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }


  return (
    <div className="App container">
      
    <DropdownButton
    alignRight
    title="Day"
    id="dropdown-menu-align-right"
    class="btn btn-info dropdown-toggle"
    onSelect={handleSelect}
      >
            <Dropdown.Item eventKey="Thursday">Thursday</Dropdown.Item>
            <Dropdown.Item eventKey="Friday">Friday</Dropdown.Item>
    </DropdownButton>
    <h3>{value}</h3>
  </div>
);
}


export default DayChooser


