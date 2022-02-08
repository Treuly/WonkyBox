import React from "react";
import { useState, useEffect } from "react";
import MapSVG from "../components/MapSVG";
import ProduceContainer from "../components/ProduceContainer";

//highlighting map regions based on their id
const Main = () => {
  // const { id } = useParams();

  let [ProduceArray, setProduceArray] = useState([]);

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

//call to get the farm info from the backend database
  // let[farm, setFarm] = useState([]);

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:8000/GetFarmInfo/`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((resp) => setFarm(resp))
  //     .catch((error) => console.log(error));
  // }, []);


  console.log(ProduceArray)

  function clearPreviousRegions() {
    for (let i = 0; i < previousLocations.length; i++) {
      document
        .getElementById(previousLocations[i])
        .setAttribute("fill", "#a2e622");
    }
  }

  //map functions
  function highlightRegion(id) {
    let others = document.getElementsByClassName("region");

    // for (let i = 0; i < others.length; i++) {
    //   others[i].setAttribute("fill", "#a2e622");
    // }
    let desired = document.getElementById(id);
    desired.setAttribute("fill", "#429054");
    // document.getElementById("region-name").data = id;
  }

  function unhighlightRegion(id) {
    let desired = document.getElementById(id);
    desired.setAttribute("fill", "#a2e622");
  }

  //handle tap on produce item, highlight corresponding region on svg
  const onClick = (locations) => {
    clearPreviousRegions();
    for (let i = 0; i < locations.length; i++) {
      highlightRegion(locations[i]);
    }
    previousLocations = locations;

    // locations.foreach(function(location){
    //   highlightRegion(location)
    // })

    // for (let i = 0; i < ProduceArray.length; i++){
    //   console.log(ProduceArray[i].id)
    //   if (ProduceArray[i].region.includes(id)){
    //     highlightRegion(id);
    //   }
    //   else if (!ProduceArray[i].region.includes(id)){
    //     unhighlightRegion(id);
    //   }
    // }
  };

  return (
    <div className="ContentBody">
      <MapSVG />
      <ProduceContainer produceList={ProduceArray} onClick={onClick} />
    </div>
  );
};

export default Main;
