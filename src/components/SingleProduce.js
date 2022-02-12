import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Produce.css";




const SingleProduce = ({singleProduce}) => {
    return (
        <Link
          to={`/Produce/${singleProduce.name}`}
          className="produce"
        >
          <h3>{singleProduce.name}</h3>
        </Link>
      );
    };
    export default SingleProduce
