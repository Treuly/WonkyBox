import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Produce.css";



const SingleFarm = ({singleFarm}) => {
  return (
    <Link
      to={`/farm/${singleFarm.name}`}
      className="produce"
    >
      <h3>{singleFarm.name}</h3>
    </Link>
  );
};
export default SingleFarm;
