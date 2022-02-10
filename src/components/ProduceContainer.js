import React from "react";
import Produce from "./WeeklyProduce" 
// import ProduceArray from "../assets/data";
import "../styles/Produce.css";
// import { ConstructionOutlined } from "@mui/icons-material";


function ProduceContainer({produceList, onClick, styleList}){

    return(
        <div className="producebox">
        <header className="producetitle">
            <h2>WHAT'S IN THE BOX THIS WEEKEND?</h2>
            </header>
        <div className ="producelist" >
                {/* Make new list from array items for UI showing only produce name */}
                {/* {produceList.map((produce) => 
                (<Produce key={produce.id} produce={produce} onClick={onClick} />))} */}
                {
                    Object.keys(produceList).map((produce)=>
                        <Produce key={produce} produce={produce} produceList={produceList} styleList = {styleList} onClick={onClick} />
                    )
                }                
        </div>
        </div>

    )
}

export default ProduceContainer;