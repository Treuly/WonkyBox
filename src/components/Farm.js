import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Produce.css";



const Farm = ({farm}) => {
  return (
    <Link
      to={`/farm/${farm.id}`}
      className="produce"
    >
      <h3>{farm.name}</h3>
    </Link>
  );
};
export default Farm;
