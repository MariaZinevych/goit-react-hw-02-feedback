export const Statictics = ({ good, neutral, bad, onClick }) => {
  return (
    <>
      <h1> Please leave feedback </h1>
      <button type="submit" onClick={onClick}>
        Good
      </button>
      <button type="submit" onClick={onClick}>
        Neutral
      </button>
      <button type="submit" onClick={onClick}>
        Bad
      </button>
      <h2>Statistics</h2>
      <ul>
        <li>Good {good} </li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};
