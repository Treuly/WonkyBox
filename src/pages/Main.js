import React from "react";
import { useState, useEffect, useRef } from "react";
// import DropDownDay from "../components/DropDownDay";
// import DropDownRegion from "../components/DropDownRegion";
import MapSVG from "../components/MapSVG";
import ProduceContainer from "../components/ProduceContainer";
import { useParams } from "react-router-dom";

import DayChooser from "../components/DayChooser";
import RegionChooser from "../components/RegionChooser";


let chosenRegion;
const Main = () => {

  //define produce array state
  let [weeklyBox, setWeeklyBox] = useState([]);

  //variables to setstyle for scrolling produce list
  const [style, setStyle] = useState("scrollContainer");

  //stores previous locations on map when clicked
  let previousLocations = [];


//function for scroll when bottom of page is reached
const listInnerRef = useRef();

{/* Function for scrolling productList keeps scroll when map is viewed and when 
    user scrolls to bottom of page whole producelist comes out*/}
const onScroll = () => {
  if (listInnerRef.current) {
    const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
    if (Math.round(scrollTop) + clientHeight === scrollHeight) {
      console.log("reached bottom");
      setStyle("scrollContainer2")
    }else{
      setStyle("scrollContainer")
    }

  }
}

const getRegion = (region) => {
  chosenRegion = (region)
}

console.log (chosenRegion)

  {/* Function call to get current box from the backend based on day and region*/}
  useEffect(() => {
    
    fetch(`http://127.0.0.1:8000/GetWeeklyBox/?day=Friday&region=Wellington`, {
      // fetch(`http://127.0.0.1:8000/GetCurrentBox`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setWeeklyBox(resp))
      .catch((error) => console.log(error));
  }, []);

  

  function clearPreviousRegions() {
    for (let i = 0; i < previousLocations.length; i++) {
      document
        .getElementById(previousLocations[i])
        .setAttribute("fill", "#a2e622");
    }
  }

  {/* Function to highlight and unhighlight regions based on producelist clicked by user */}
  function highlightRegion(id) {
    let desired = document.getElementById(id);
    desired.setAttribute("fill", "#429054");
    desired.textContent =(desired.id)
  }


  {/* handle tap on produce item, highlight corresponding region on svg */}
  const onClick = (locations, id) => {
    // changeStyle(id);
    clearPreviousRegions();
    for (let i = 0; i < locations.length; i++) {
      highlightRegion(locations[i]);
    }
    previousLocations = locations;
  };

  return (
    <div className="contentBody" 
    onScroll={onScroll}
    ref={listInnerRef}
    style={{ height: "600px", overflowY: "auto" }} 
    >
      {/* Add Map Image */}
      <div className="mapContainer">
        <MapSVG />
        <p></p>
        </div>
        <div className="dropContainer">
          {/* Add dropdown menu items */}
          <div className="dropDay"><DayChooser /></div>
          <div className="dropRegion"><RegionChooser getRegion={getRegion}/></div>
          </div>
          {/* Lists foor weeklybox Produce */}
     <div className = "produceContainer" >
       <ProduceContainer produceList={weeklyBox.produce} onClick={onClick} style={style} />
       </div> 
    </div>
  );
};

export default Main;
