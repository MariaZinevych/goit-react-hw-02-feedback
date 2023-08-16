import { Container } from './Statistics.styled';

export const Statictics = ({
  good,
  neutral,
  bad,
  onClick,
  onTotal,

  //   onClickGood,
  //   onClickNeutral,
  //   onClickbad,
}) => {
  return (
    <Container>
      <h1> Please leave feedback </h1>
      <button
        type="submit"
        onClick={() => {
          onClick('good');
        }}
      >
        Good
      </button>
      <button
        type="submit"
        onClick={() => {
          onClick('neutral');
        }}
      >
        Neutral
      </button>
      <button
        type="submit"
        onClick={() => {
          onClick('bad');
        }}
      >
        Bad
      </button>
      <h2>Statistics</h2>
      <ul>
        <li>Good {good} </li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
        <li>Total {onTotal()}</li>
        <li>PositivePercentage </li>
      </ul>
    </Container>
  );
};
