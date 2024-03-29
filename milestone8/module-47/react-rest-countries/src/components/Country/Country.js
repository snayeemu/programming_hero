import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props.country);
  const { name, population, region, area, flags } = props.country;
  return (
    <div className="country bg-warning">
      <h2>Country Name: {name.common}</h2>
      <p>Population: {population}</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <img src={flags.png} alt="" />
      <p>
        <small>Area: {area}</small>
      </p>
    </div>
  );
};

export default Country;
