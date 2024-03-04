import React from "react";
import { UnorderedList } from "./Dashboard.styled";

const Dashboard = ({ incrementVoice, options }) => {
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
};
export default Dashboard;
