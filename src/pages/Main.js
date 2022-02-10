import React from "react";
import { useState, useEffect, useRef } from "react";
import DropDownDay from "../components/DropDownDay";
import DropDownRegion from "../components/DropDownRegion";

import MapSVG from "../components/MapSVG";
import ProduceContainer from "../components/ProduceContainer";



//highlighting map regions based on their id
const Main = () => {

  //define produce array state
  let [ProduceArray, setProduceArray] = useState([]);

    //stores previous locations on map when clicked
    let previousLocations = [];


  // const changeStyle = (id) => {  

  //   // console.log(document.getElementById(id));
  //   // document.getElementById(id).setAttribute("fill", "black");
  //   setStyleList("cont" ? "cont" : "cont2");
  // };

//function for scroll when bottom of page is reached
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("reached bottom");
      }
    }
  };

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

  //map functions to highlight region and unhighlight the regions
  function highlightRegion(id) {
    let desired = document.getElementById(id);
    desired.setAttribute("fill", "#429054");
    desired.textContent =(desired.id)
    // document.write(desired);
    console.log(desired.id)
  }
  //handle tap on produce item, highlight corresponding region on svg
  const onClick = (locations, id) => {
    // changeStyle(id);
    clearPreviousRegions();
    for (let i = 0; i < locations.length; i++) {
      highlightRegion(locations[i]);
    }
    previousLocations = locations;
  };


  return (
    <div className="contentBody" onScroll={onScroll}
    ref={listInnerRef}
    style={{ height: "auto", overflowY: "auto" }}>
      {/* Add Map Image */}
      <div className="mapContainer">
        <MapSVG />
        <p></p>
        </div>
        <div className="dropContainer">
          {/* Add dropdown menu items */}
          <div className="dropDay"><DropDownDay /></div>
          <div className="dropRegion"><DropDownRegion/></div>
          </div>
          {/* Lists foor weeklybox Produce */}
     <div className = "produceContainer"><ProduceContainer produceList={ProduceArray} onClick={onClick} /></div> 
    </div>
  );
};

export default Main;
