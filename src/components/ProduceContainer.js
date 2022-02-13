import React from "react";
import WeeklyProduce from "./WeeklyProduce" 
import "../styles/Produce.css";


const ProduceContainer = ({produceList, onClick, style, highlight}) => {

    return(
        <div className="producebox" >
        <header className="producetitle">
            <h3>WHAT'S IN THE BOX THIS WEEKEND?</h3 >
            </header>
        <div className ="producelist" id={style}>
                {
                         produceList && produceList.map((singleProduce, index)=>
                             <WeeklyProduce
                              key={index}
                               id={index} 
                               singleProduce={singleProduce} 
                               produceList={produceList} 
                               onClick={onClick}
                               highlight={highlight}
                                 />)
              }                
        </div>
        </div>

    )
}

export default ProduceContainer;