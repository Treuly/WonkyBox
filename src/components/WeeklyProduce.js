
import React from 'react';
import { Link } from 'react-router-dom';


function WeeklyProduce({singleProduce, produceList, onClick}){

    return(
        // Get region from tapped produce, match with onClick in grandparent component
        // <Link to={`/Produce/${produce.id}`} className = "produce" onClick={() => onClick(produce.region)}>
        //     <h3>{produce}</h3>
        // </Link>
        <div  className = "produce"  onClick={() => onClick(singleProduce.Region, singleProduce.Name)}>
            <ul><h3>{singleProduce.Name}</h3></ul>
        </div>
        // <div></div>
    )   
}

export default WeeklyProduce;