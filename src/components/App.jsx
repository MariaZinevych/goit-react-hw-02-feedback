import { Component } from 'react';
import { Statictics } from './Statistics/Statistics';
import { Feedbacks } from './FeedbackOption/FeedbackOptions ';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleOnClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  handleOnClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  render() {
    return (
      <>
        <Statictics
          onClick={
            (this.handleOnClickGood,
            this.handleOnClickBad,
            this.handleOnClickNeutral)
          }
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total
          positivePercentage
        />
        <Feedbacks></Feedbacks>
      </>
    );
  }
}
