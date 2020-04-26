import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Answer from '../Components/Answer.component';

import Question from '../Components/Question.component';

const _renderAnswers = (answers, chosenAnswer, handleClick) => answers.map((answer, index) => (
  <Answer
    {...answer}
    chosen={chosenAnswer === index}
    onClick={handleClick(index)}
  />
));

const _handleAnswerClick = (setAnswer) => (index) => () => setAnswer(index);

const QuizContainer = ({ question }) => {
  const [chosenAnswer, setChosenAnswer] = useState(-1);

  return (
    <>
      <Question content={question.content} />
      {_renderAnswers(question.answers, chosenAnswer, _handleAnswerClick(setChosenAnswer))}
    </>
  );
};

QuizContainer.propTypes = {
  question: PropTypes.shape({
    content: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string,
    })),
  }).isRequired,
};

export default QuizContainer;
