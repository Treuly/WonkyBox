import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Produce.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FarmPage = ({ }) => {
  const { name } = useParams();
  // const { id } = useParams();
  console.log(name);

  let [farm, setFarm] = useState([]);

  useEffect(() => {
    fetch(`https://wonkyboxnz-django.herokuapp.com/GetSingleFarm/?name=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer awXpFWmbbjcKzveLhJh4aHBW7ChQVLUrY836j63mRGoWr2JnsazMJgFzemgjhqE6FDMUXtaADb2AG3Xxjq`,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setFarm(resp))
      .catch((error) => console.log(error));
  }, [name]);

  console.log(farm.produces);
  return (
    <div>
      <div className="producebox">
        <div className="producelist">
          <header className="producetitle">
            <h1 className="title">{farm.name}</h1>
          </header>
          <br />
          <h3 className="title">Location</h3>
          <h4>{farm.location}</h4>
          <br />
          <h3 className="title">Description</h3>
          <h4>{farm.description}</h4>
          <br />
          <h3 className="title">Our Produce</h3>

          {/* {farm.produce &&
              farm.produce.map((oneProduce, index) => (
                <ul key={index}>{oneProduce}</ul>
              ))}
          </h4> */}

          <h4>
            {farm.produce &&
              farm.produce.map((oneProduce, index) => (
                <Link to={`/Produce/${oneProduce}`} style={{ textDecoration: 'none', color: '#434f00' }}> <ul key={index}>{oneProduce}</ul></Link>
              ))}
          </h4>


          <br />
          <h3 className="title">Our Story</h3>
          <h4>{farm.farmers_story}</h4>
          <div className="produceImage">
            {" "}
            <img
              src={`https://wonkyboxnz-django.herokuapp.com/media/${farm.image}`}
              width="200"
              height="250"
              className="d-inline-block align-top"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmPage;
