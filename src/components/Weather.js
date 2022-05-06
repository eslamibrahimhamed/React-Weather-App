import React from "react";

const Weather = (props) => {
  return (
    <div className="weather text-start">
      {props.temperature && (
        <p>
          temperature : <span>{props.temperature}</span>
        </p>
      )}
      {props.city && (
        <p>
          City :<span> {props.city}</span>
        </p>
      )}
      {props.country && (
        <p>
          Country : <span>{props.country}</span>
        </p>
      )}
      {props.humidity && (
        <p>
          Humidity : <span>{props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p>
          Description : <span>{props.description}</span>
        </p>
      )}
      {props.error && (
        <p style={{ fontWeight: "bold", color: "#f00", border: "none" }}>
          Error : {props.error}
        </p>
      )}

      {/* {props.tempreature}
      {props.city}
      {props.country}
      {props.humidity}
      {props.description} */}
    </div>
  );
};

export default Weather;
