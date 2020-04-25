import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Question from '../Components/Question.component';

const QuizContainer = ({ question }) => {
  const [chosenAnswer, setChosenAnswer] = useState(0);

  return (
    <>
      <Question content={question.content} />
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
