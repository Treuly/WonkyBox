import React from "react";
import WeeklyProduce from "./WeeklyProduce" 
// import ProduceArray from "../assets/data";
import "../styles/Produce.css";
// import { ConstructionOutlined } from "@mui/icons-material";


const ProduceContainer = ({produceList, onClick}) => {

    return(
        <div className="producebox">
        <header className="producetitle">
            <h2>WHAT'S IN THE BOX THIS WEEKEND?</h2>
            </header>
        <div className ="producelist" id="scrollContainer" >
                {
                    Object.keys(produceList).map((produce)=>
                        <WeeklyProduce key={produce} produce={produce} produceList={produceList} onClick={onClick} />
                    )
                }                
        </div>
        </div>

    )
}

export default ProduceContainer;