
import { blueGrey } from '@material-ui/core/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";


function WeeklyProduce({singleProduce, onClick, highlight, index, toggle, selected}){

    return(

        // Get region from tapped produce, match with onClick in grandparent component
        <>
        <div className = "produce-toggle" onClick={() => toggle(index)}>
        <div  
        onClick={() => onClick(singleProduce.Region, singleProduce.Name)}
        className ={classnames(["produce",
        highlight === singleProduce.Name ? 'main-theme-color-bg cont2':null])}
        >     
           <ul ><h3>  {singleProduce.Name.toUpperCase()}</h3></ul>
        </div>
        </div>
        <div className=
        {selected === index ? 'producelinks-show' : 'producelinks'}>
            <Link to= {`/produce/${singleProduce.Name}`}> Produce Information </Link>
            <p></p>
            <Link to={`/farmstead/${singleProduce.Name}`}> Grower Information </Link>
        </div>
        </>
    )   
}

export default WeeklyProduce;