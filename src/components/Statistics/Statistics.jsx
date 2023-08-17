import { Feedbacks } from 'components/FeedbackOption/FeedbackOptions ';
import { Container } from './Statistics.styled';

export const Statictics = ({
  good,
  neutral,
  bad,
  onClick,
  onTotal,
  onGoodfeedbach,
}) => {
  return (
    <Container>
      <Feedbacks onClick={onClick} />

      <h2>Statistics</h2>
      <ul>
        <li>Good {good} </li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
        <li>Total {onTotal()}</li>
        <li>PositivePercentage {onGoodfeedbach()} % </li>
      </ul>
    </Container>
  );
};
