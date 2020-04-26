import React from 'react';
import PropTypes from 'prop-types';

import Markdown from './Markdown.component';
import '../App.css';

const _renderContent = (content) => (
  <Markdown source={content} />
);

const Answer = ({
  content, answer_option: option, chosen, onClick,
}) => (
  <div
    className={`answer ${chosen && 'chosen'}`}
    onClick={onClick}
  >
    {_renderContent([option.name, content].join('. '))}
  </div>
);

Answer.propTypes = {
  content: PropTypes.string.isRequired,
  answer_option: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  chosen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Answer;
