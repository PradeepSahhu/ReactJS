// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from './practice';

const [Honda, Tesla] = cars;

const {model: Hmodel, coloursByPopularity:[black, silver ], speedStats} = Honda;
const {topSpeed: HtopSpeed, zeroToSixty: HzeroToSixty} = speedStats;

const {model: Tmodel, coloursByPopularity:[red, white ], speedStats:{ topSpeed: TtopSpeed, zeroToSixty: TzeroToSixty}} = Tesla;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top color</th>
    </tr>
    <tr>
      <td>{Tesla.model}</td>
      <td>{TtopSpeed}</td>
      <td>{red}</td>
    </tr>
    <tr>
      <td>{Hmodel}</td>
      <td>{HtopSpeed}</td>
      <td>{black}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
