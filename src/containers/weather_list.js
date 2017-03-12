import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

  renderWeather(cityData){
      const name = cityData.city.name;
      // This is a good place to change temp unit. _.map ----> Lodash check
      const temps = cityData.list.map(weather => weather.main.temp);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      // WOW! AWESOME
      const { lon, lat } = cityData.city.coord;

      return (
        <tr key={name}>
         <td><GoogleMap lon={lon} lat={lat} /></td>
         <td><Chart data={temps} color="orange" units="K" /></td>
         <td><Chart data={pressures} color="green" units="pH" /></td>
         <td><Chart data={humidities} color="black" units="%" /></td>
        </tr>
      )
  }

  render(){
      return (
          <table className="table table-hover">
            <thead>
                <tr>
                  <th>City</th>
                  <th>Temperature (K)</th>
                  <th>Pressure (hP)</th>
                  <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
              {this.props.weather.map(this.renderWeather)}
            </tbody>
          </table>
      );

  }
}

function mapStateToProps({weather}){
    return { weather }; // { weather } === { weather: weather }
}
export default connect(mapStateToProps)(WeatherList);
