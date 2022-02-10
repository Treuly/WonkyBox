
import React from 'react';
import { Link } from 'react-router-dom';


function Produce({produce, produceList,styleList, onClick}){
    return(
        // Get region from tapped produce, match with onClick in grandparent component
        // <Link to={`/Produce/${produce.id}`} className = "produce" onClick={() => onClick(produce.region)}>
        //     <h3>{produce}</h3>
        // </Link>
        <div  className = "produce" id = {produce} onClick={() => onClick(produceList[produce], produce)}>
            <ul className ={styleList}><h3>{produce}</h3></ul>
        </div>


    )
}

export default Produce;