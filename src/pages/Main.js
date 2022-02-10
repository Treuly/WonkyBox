import React from "react";
import { useState, useEffect } from "react";
import DropDownDay from "../components/DropDownDay";
import DropDownRegion from "../components/DropDownRegion";
import MapSVG from "../components/MapSVG";
import ProduceContainer from "../components/ProduceContainer";


//highlighting map regions based on their id
const Main = () => {

  //define produce array state
  let [ProduceArray, setProduceArray] = useState([]);

  // define colour change component state
  const [styleList, setStyleList] = useState("cont");
  

  const changeStyle = (id) => {  

    // console.log(document.getElementById(id));
    // document.getElementById(id).setAttribute("fill", "black");
    setStyleList("cont" ? "cont" : "cont2");
  };

  //stores previous locations on map when clicked
  let previousLocations = [];


//call to get the currentbox from the backend
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/GetCurrentBox/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setProduceArray(resp))
      .catch((error) => console.log(error));
  }, []);

  function clearPreviousRegions() {
    for (let i = 0; i < previousLocations.length; i++) {
      document
        .getElementById(previousLocations[i])
        .setAttribute("fill", "#a2e622");
    }
  }

  //map functions
  function highlightRegion(id) {
    let desired = document.getElementById(id);
    desired.setAttribute("fill", "#429054");
    desired.textContent =(desired.id)
    // document.write(desired);
    console.log(desired.id)
  }

  function unhighlightRegion(id) {
    let desired = document.getElementById(id);
    desired.setAttribute("fill", "#a2e622");
  }

  //handle tap on produce item, highlight corresponding region on svg
  const onClick = (locations, id) => {
    changeStyle(id);
    clearPreviousRegions();
    for (let i = 0; i < locations.length; i++) {
      highlightRegion(locations[i]);
    }
    previousLocations = locations;
  };

  console.log(styleList)

  return (
    <div className="contentBody">
      <div className="mapContainer">
        <MapSVG />
        <p></p>
        </div>
        <div className="dropContainer">
          <div className="dropDay"><DropDownDay /></div>
          <div className="dropRegion"><DropDownRegion/></div>
          </div>
     <div className = "produceContainer"  ><ProduceContainer  styleList={styleList} produceList={ProduceArray} onClick={onClick} /></div> 
    </div>
  );
};

export default Main;
