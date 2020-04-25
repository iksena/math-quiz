import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Answer from '../Components/Answer.component';

import Question from '../Components/Question.component';

const _renderAnswers = (answers, chosenAnswer, onClick) => answers.map((answer, index) => (
  <Answer
    {...answer}
    chosen={chosenAnswer === index}
    onClick={onClick(index)}
  />
));

const QuizContainer = ({ question }) => {
  const [chosenAnswer, setChosenAnswer] = useState(-1);

  return (
    <>
      <Question content={question.content} />
      {_renderAnswers(question.answers, chosenAnswer, (index) => () => setChosenAnswer(index))}
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
