import React, { Component } from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from "../components/Chart";
import "../style/style.css";
import Googlemap from "../components/Googlemap";

class Weatherlist extends Component {
  renderWeather(cityData) {
    let name = cityData.city.name;
    let temps = cityData.list.map(weather => weather.main.temp);
    let pressure = cityData.list.map(weather => weather.main.pressure);
    let humidity = cityData.list.map(weather => weather.main.humidity);
    let { lat, lon } = cityData.city.coord;
    return (
      <tr key={name}>
        <td>
          <Googlemap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color={"red"} units={"K"} />
        </td>
        <td>
          <Chart data={pressure} color={"green"} units={"hPa"} />
        </td>
        <td>
          <Chart data={humidity} color={"orange"} units={"%"} />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temparature(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(Weatherlist);
