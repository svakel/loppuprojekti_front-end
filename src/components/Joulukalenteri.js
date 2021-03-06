import React, { Component } from "react";
import Luukku from "./Luukku";

function shuffleDoors(days) {
  let i = days.length - 1;
  for (i; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = days[i];
    days[i] = days[j];
    days[j] = temp;
  }
  return days;
}

const days = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24
];

class Joulukalenteri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: shuffleDoors(days)
    };
  }

  render() {
    return (
      <div>
        <div className="calendar">
          {this.state.days.map(d => (
            <Luukku key={d} day={d} />
          ))}
        </div>
      </div>
    );
  }
}

export default Joulukalenteri;