import React from "react";
import { useState } from "react";
import WeeklyProduce from "./WeeklyProduce" 
import "../styles/Produce.css";


const ProduceContainer = ({produceList, onClick, style, highlight}) => {
    const [selected, setSelected] = useState(null);

     const toggle = (index) => {
        if (selected === index){
        return setSelected(null);
        //closes if already selected
        }  
        setSelected(index);
    }



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
                                index = {index}
                                toggle={toggle}
                                selected={selected}
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