import { useState, useRef, useEffect } from "react";
import MapSVG from "../components/MapSVG";
import DayChooser from "../components/DayChooser";
import RegionChooser from "../components/RegionChooser";
import CustomBox from "../components/CustomBox";

//variable for day and region
let chosenRegion;
let chosenDay;

let changeStyle;
//stores previous locations on map when clicked
let previousLocations = [];


const Main = () => {
  //variables to setstyle for scrolling produce list
  const [style, setStyle] = useState("scrollContainer");
  const [day, setDay] = useState();
  const [region, setRegion] = useState();
  const [highlight, setHighlight] = useState();

  const[regionProduce, setRegionProduce] = useState();

  //scroll when bottom of page is reached
    const listInnerRef = useRef();

  
  
  //function to setHighlight on clicked item on list
  useEffect(() => {
    changeStyle = (name) => {
        setHighlight(name);
    };
  },[])


  {/* Statement to assign default value to day dropdown */}
  if(day === undefined) {
    chosenDay = "Friday"
  }else{
  chosenDay =day
  }

  {/* Statement to assign default value to region dropdown */}
  if(day === undefined) {
  chosenRegion = "Wellington"
  }else{
  chosenRegion = region
  }


  { /* Function for scrolling productList keeps scroll when map is viewed and when 
  user scrolls to bottom of page whole producelist comes out*/ }
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.round(scrollTop) + clientHeight === scrollHeight) {
        setStyle("scrollContainer2");
      } else {
        setStyle("scrollContainer");
      }
    }
  };


  { /* Function to clear the highlight in map when user clicks on another produce*/}
  function clearPreviousRegions() {
    console.log(previousLocations);
    for (let i = 0; i < previousLocations.length; i++) {
      document .getElementById(previousLocations[i])
               .setAttribute("fill", "#a2e622")
    }
  }


  { /* Function to highlight and unhighlight regions based on producelist clicked by user */}
  function highlightRegion(id) {
    let desired = document.getElementById(id);
    desired.setAttribute("fill", "#429054");
  }


  { /* Iterate locations for map highlighting */}
  function listHighlightRegion(locations, highlightRegion) {
    for (let i = 0; i < locations.length; i++) {
      highlightRegion(locations[i]);
    }
  }
  

  { /* handle tap on produce item, highlight corresponding region on svg */ }
  const onClick = (locations, name) => {
    changeStyle(name);
    clearPreviousRegions();
    listHighlightRegion(locations, highlightRegion);

    setRegionProduce(locations);
    //set locations as previouslocations for clearing previous regions
    previousLocations = locations;
  };

  //function to get props day from DayChooser component
  const getDay = (day) => {
    setDay(day)
  }

  //function to get props region from RegionChooser Component
  const getRegion =(region) => {
    setRegion(region)
  }


  return (
    <div
      className="contentBody"
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: "700px", overflowY: "auto" }}
    >
      <h1>Wonky Box</h1>
      {/* Add Map Image */}
      <div className="mapContainer">
        <MapSVG />
        <div>
          </div>
      </div>
      <div className="containerBox">
      <div className="regionName"><p>{regionProduce}</p></div>

      <div className="dropContainer">
        {/* Add dropdown menu items */}
        <div className="dropDay">
          <DayChooser getDay={getDay} />
        </div>
        <div className="dropRegion">
          <RegionChooser getRegion={getRegion} />
        </div>
      </div>
      {/* Lists foor weeklybox Produce */}
      <CustomBox
        onClick={onClick}
        style={style}
        region={chosenRegion}
        day={chosenDay}
        highlight={highlight}
      />
    </div>
    <br/>
    <br/>
    </div>
  );
};

export default Main;

