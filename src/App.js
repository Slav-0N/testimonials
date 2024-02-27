import Statistics from "./Components/Statistics/Statistics";
import Dashboard from "./Components/Dashboard/Dashboard";
import Section from "./Components/Section/Section";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementVoice = (name) => {
    this.setState((prev) => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, currValue) => acc + currValue, 0);

  countPositiveFeedbackPercentage = () => {
    const percentage = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.floor(percentage);
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <Section title="Заголовок раздела ____">
        <Dashboard
          options={Object.keys(this.state)}
          incrementVoice={this.incrementVoice}
        />
        {total > 0 && (
          <Statistics
            state={this.state}
            percent={this.countPositiveFeedbackPercentage}
            total={this.countTotalFeedback}
          />
        )}
      </Section>
    );
  }
}
