import { Component } from 'react';
import { Statictics } from './Statistics/Statistics';
import { GlobalStyle } from 'Global.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalfeedbach = this.countTotalFeedback();
    return Math.round((good / totalfeedbach) * 100) || 0;
  };

  render() {
    return (
      <>
        <Statictics
          onClick={this.handleOnClick}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onTotal={this.countTotalFeedback}
          onGoodfeedbach={this.countPositiveFeedbackPercentage}
        />

        <GlobalStyle />
      </>
    );
  }
}
