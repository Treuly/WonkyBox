import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";



const WeeklyProduce = ({ 
    singleProduce,
    onClick,
    highlight,
    index,
    toggle,
    selected,}) => {


  return (
    // Get region from tapped produce, match with onClick in grandparent component
    <div>
      <div className="produce-toggle" onClick={() => toggle(index)}>
        <div
          onClick={() => onClick(singleProduce.Region, singleProduce.Name)}
          className={classnames([
            "produce",
            highlight === singleProduce.Name
              ? "main-theme-color-bg cont2"
              : null,
          ])}
        >
          <ul>
            <h3> {singleProduce.Name}</h3>
          </ul>
        </div>
      </div>
      <div
        className={selected === index ? "producelinks-show" : "producelinks"}
      >
        <Link
          to={`/produce/${singleProduce.Name}`}
          style={{ color: "#434f00" }}
        >
          {" "}
          Produce Information{" "}
        </Link>
        <p></p>
        <Link
          to={`/farm/${singleProduce.Farmstead}`}
          style={{ color: "#434f00" }}
        >
          {" "}
          Grower Information{" "}
        </Link>
      </div>
    </div>
  );
}

export default WeeklyProduce;
