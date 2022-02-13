
import React from 'react';
import { Link } from 'react-router-dom';


function WeeklyProduce({singleProduce, onClick}){

    return(
        // Get region from tapped produce, match with onClick in grandparent component
        // <Link to={`/Produce/${produce.id}`} className = "produce" onClick={() => onClick(produce.region)}>
        //     <h3>{produce}</h3>
        // </Link>

        // Get region from tapped produce, match with onClick in grandparent component
        <div  className = "produce"  onClick={() => onClick(singleProduce.Region, singleProduce.Farmstead, singleProduce.Name)}>
           <div><ul><h3>{singleProduce.Name}</h3></ul></div> 
        </div>
    )   
}

export default WeeklyProduce;