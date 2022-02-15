
import { blueGrey } from '@material-ui/core/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";


function WeeklyProduce({singleProduce, onClick, highlight, index, toggle, selected}){

    // const highlightItem =() =>{
    //     ((highlight === singleProduce.Name )? idstyle = "cont2" : idstyle = "cont")
    // }    

    return(

        // Get region from tapped produce, match with onClick in grandparent component
        <>
        <div className = "produce-toggle" onClick={() => toggle(index)}>
        <div  
        onClick={() => onClick(singleProduce.Region, singleProduce.Name)}
        className ={classnames(["produce",
        highlight === singleProduce.Name ? 'main-theme-color-bg cont2':null])}
        >     
           <ul ><h3>  {singleProduce.Name}</h3></ul>
        </div>
        </div>
        <div className=
        {selected === index ? 'producelinks-show' : 'producelinks'}>
            <Link to= {`/produce/${singleProduce.Name}`}> Produce Information </Link>
            <p></p>
            {singleProduce.Farmstead.map((farm, index) =>
            <Link to={`/farm/${farm}`}
                key={index}
            > {farm} </Link>
            )}

            
        </div>
        </>
    )   
}

export default WeeklyProduce;