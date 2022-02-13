
import { blueGrey } from '@material-ui/core/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";

let idstyle
function WeeklyProduce({singleProduce, onClick, highlight}){

    // const highlightItem =() =>{
    //     ((highlight === singleProduce.Name )? idstyle = "cont2" : idstyle = "cont")
    // }    

    return(

        // Get region from tapped produce, match with onClick in grandparent component
        <div  
        onClick={() => onClick(singleProduce.Region, singleProduce.Name)}
        className ={classnames(["produce",
        highlight === singleProduce.Name ? 'main-theme-color-bg cont2':null])}

        >     
  
           <ul ><h3>  {singleProduce.Name}</h3></ul>
        </div>
    )   
}

export default WeeklyProduce;