const Statistics = ({ percent, total, good, neutral, bad }) => {
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
};
export default Statistics;
