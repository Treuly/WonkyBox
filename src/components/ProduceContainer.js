import React from "react";
import WeeklyProduce from "./WeeklyProduce" 
import "../styles/Produce.css";


const ProduceContainer = ({produceList, onClick, style}) => {

    return(
        <div className="producebox" >
        <header className="producetitle">
            <h3>WHAT'S IN THE BOX THIS WEEKEND?</h3 >
            </header>
        <div className ="producelist" id={style}>
                {
                         produceList && produceList.map((singleProduce)=>
                             <WeeklyProduce singleProduce={singleProduce} produceList={produceList} onClick={onClick} />)
              }                
        </div>
        </div>

    )
}

export default ProduceContainer;