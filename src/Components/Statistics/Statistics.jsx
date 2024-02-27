import React, { Component } from "react";

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props.state;
    const { percent, total } = this.props;

    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total: {total()}</li>
          <li>
            Positive feedback:
            {percent() > 0 ? `${percent()} %` : "--->>>Good voices are abscent"}
          </li>
        </ul>
      </div>
    );
  }
}
