import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App () {
  
  const [countPositiveFeedback, setCountPositiveFeedback] = useState(0);
  const [countNeutralFeedback, setCountNeutralFeedback] = useState(0);
  const [countNegativeFeedback, setCountNegativeFeedback] = useState(0);

  function incrPositiveFeedback() {
    setCountPositiveFeedback(countPositiveFeedback + 1);
  }

  function incrNeutralFeedback() {
    setCountNeutralFeedback(countNeutralFeedback + 1);
  }

  function incrNegativeFeedback() {
    setCountNegativeFeedback(countNegativeFeedback + 1);
  }

  const incFeedback = name => {
    switch (name) {
      case 'Positive':
        incrPositiveFeedback();
        break;
      case 'Neutral':
        incrNeutralFeedback();
        break;
      case 'Negative':
        incrNegativeFeedback();
        break;
      default:
        return;
    }
  };

  function countTotalFeedback() {
    return countPositiveFeedback + countNeutralFeedback + countNegativeFeedback;
  }
    
  const countPositiveFeedbackPercentage = () => {
    return Math.round((countPositiveFeedback / countTotalFeedback()) * 100) || 0;
  };  
  
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Positive', 'Neutral', 'Negative']}
            onClick={incFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={countPositiveFeedback}
              neutral={countNeutralFeedback}
              bad={countNegativeFeedback}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given"/>
          )}
        </Section>
      </div>
    );
  }

