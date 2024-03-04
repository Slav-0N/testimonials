import Statistics from "./Components/Statistics/Statistics";
import Dashboard from "./Components/Dashboard/Dashboard";
import Section from "./Components/Section/Section";

import React, { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementVoice = (name) => {
    switch (name) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good / countTotalFeedback()) * 100;
    return Math.floor(percentage);
  };

  const total = countTotalFeedback();
  return (
    <Section>
      <Dashboard
        options={["good", "neutral", "bad"]}
        incrementVoice={incrementVoice}
      />
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          percent={countPositiveFeedbackPercentage}
          total={countTotalFeedback}
        />
      ) : (
        <h2> No feedback given </h2>
      )}
    </Section>
  );
};
export default App;
