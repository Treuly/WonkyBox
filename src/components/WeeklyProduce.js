
import React from 'react';
import { Link } from 'react-router-dom';


function Produce({produce, produceList, onClick}){
    return(
        // Get region from tapped produce, match with onClick in grandparent component
        // <Link to={`/Produce/${produce.id}`} className = "produce" onClick={() => onClick(produce.region)}>
        //     <h3>{produce}</h3>
        // </Link>

        <div  className = "produce" onClick={() => onClick(produceList[produce])}>
            <h3>{produce}</h3>
        </div>


    )
}

export default Produce;