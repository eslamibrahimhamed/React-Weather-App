import { ThirteenMpSharp } from "@mui/icons-material";
import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d34e55cdc54c62df1e810e00743da19a";
// https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=d34e55cdc54c62df1e810e00743da19a

class App extends Component {
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     console.log(res.data);
  //     this.setState({
  //       users: res.data,
  //     });
  //   });
  // }

  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };

  // getWeather
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please Enter Data",
      });
    }
  };

  render() {
    return (
      <div className="App  container-fluid">
        <div className="child-content  text-center">
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
