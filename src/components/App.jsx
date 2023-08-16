import { Component } from 'react';
import { Statictics } from './Statistics/Statistics';
import { Feedbacks } from './FeedbackOption/FeedbackOptions ';
import { GlobalStyle } from 'Global.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleOnClickGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handleOnClickneutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleOnClickbad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  handleOnClick = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    return (
      <>
        <Statictics
          onClick={this.handleOnClick}
          // onClickGood={this.handleOnClickGood}
          // onClickNeutral={this.handleOnClickneutral}
          // onClickbad={this.handleOnClickbad}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onTotal={this.countTotalFeedback}
        />
        <Feedbacks></Feedbacks>
        <GlobalStyle />
      </>
    );
  }
}
