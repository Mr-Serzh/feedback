import React, { Component } from 'react';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //   state = {
  //   value: this.props.initialValue,
  // };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Please leave feedback</h1>
        <div className={s.buttonBox}>
          <button
            className={s.button}
            type="button"
            onClick={() => {
              console.log('Good');
            }}
          >
            Good
          </button>
          <button
            className={s.button}
            type="button"
            onClick={() => {
              console.log('Neutral');
            }}
          >
            Neutral
          </button>
          <button
            className={s.button}
            type="button"
            onClick={() => {
              console.log('Bad');
            }}
          >
            Bad
          </button>
        </div>
        <h1 className={s.title}>Statistics</h1>
        <ul className={s.list}>
          <li className={s.item}>
            Good: <span>0</span>
          </li>
          <li className={s.item}>
            Neutral: <span>0</span>
          </li>
          <li className={s.item}>
            Bad: <span>0</span>
          </li>
          <li className={s.item}>
            Total: <span>0</span>
          </li>
          <li className={s.item}>
            Pozitive feedback: <span>0%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
