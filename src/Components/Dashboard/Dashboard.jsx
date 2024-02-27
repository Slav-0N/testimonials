import React, { Component } from "react";
import { UnorderedList } from "./Dashboard.styled";

export default class Dashboard extends Component {
  handleClick = ({ target: { name } }) => {};

  render() {
    const { incrementVoice, options } = this.props;
    return (
      <UnorderedList>
        {options.map((option) => {
          return (
            <li key={option}>
              <button onClick={() => incrementVoice(option)}>{option}</button>
            </li>
          );
        })}
      </UnorderedList>
    );
  }
}
