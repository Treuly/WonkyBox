import React from "react";
import { useState, useRef } from "react";
import MapSVG from "../components/MapSVG";
import DayChooser from "../components/DayChooser";
import RegionChooser from "../components/RegionChooser";
import CustomBox from "./CustomBox";

//variable for day and region
let chosenRegion;
let chosenDay;
let dayY;


const Main = () => {
  //variables to setstyle for scrolling produce list
  const [style, setStyle] = useState("scrollContainer");
  const [day, setDay] = useState();

  //stores previous locations on map when clicked
  let previousLocations = [];

  //function for scroll when bottom of page is reached
  const listInnerRef = useRef();

  {
    /* Function for scrolling productList keeps scroll when map is viewed and when 
    user scrolls to bottom of page whole producelist comes out*/
  }
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.round(scrollTop) + clientHeight === scrollHeight) {
        console.log("reached bottom");
        setStyle("scrollContainer2");
      } else {
        setStyle("scrollContainer");
      }
    }
  };

  {
    /* Get value of region from dropdown list   */
  }
  const getRegion = (region) => {
      chosenRegion = region;
  }

  {
    /* Get value of region from dropdown list   */
  }
  

  // console.log(chosenRegion);
  // console.log(setDay);

  if(day === undefined) {
    dayY = "Friday"
}else{
  dayY =day
}


  function clearPreviousRegions() {
    for (let i = 0; i < previousLocations.length; i++) {
      document
        .getElementById(previousLocations[i])
        .setAttribute("fill", "#a2e622");
    }
  }

  {
    /* Function to highlight and unhighlight regions based on producelist clicked by user */
  }
  function highlightRegion(id) {
    let desired = document.getElementById(id);
    desired.setAttribute("fill", "#429054");
    desired.textContent = desired.id;
  }

  {
    /* handle tap on produce item, highlight corresponding region on svg */
  }
  const onClick = (locations, id) => {
    // changeStyle(id);
    clearPreviousRegions();
    for (let i = 0; i < locations.length; i++) {
      highlightRegion(locations[i]);
    }
    previousLocations = locations;
  };

  return (
    <div
      className="contentBody"
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
        <div className="dropDay">
          <DayChooser getDay={day => setDay(day)} />
        </div>
        <div className="dropRegion">
          <RegionChooser getRegion={getRegion} />
        </div>
      </div>
      {/* Lists foor weeklybox Produce */}
      <CustomBox
        onClick={onClick}
        style={style}
        chosenRegion={chosenRegion}
        day={dayY}
      />
    </div>
  );
};

export default Main;
