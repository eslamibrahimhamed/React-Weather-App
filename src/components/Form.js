import React from "react";
import Button from "@mui/material/Button";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather} className="d-flex">
      <input
        className="form-control "
        type="text"
        name="city"
        placeholder="City"
      />
      <input
        className="form-control "
        type="text"
        name="country"
        placeholder="Country"
      />

      <Button type="submit" variant="contained" color="success">
        Get Weather
      </Button>
      

      {/* <button type="submit" class="btn btn-primary">
        Get Weather
      </button> */}
    </form>
  );
};

export default Form;
