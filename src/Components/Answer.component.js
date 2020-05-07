import React from 'react';
import PropTypes from 'prop-types';

import Markdown from './Markdown.component';
import '../App.css';

const _renderContent = (content) => (
  <Markdown source={content} />
);

const Answer = ({
  content,
  option,
  chosen,
  onClick,
}) => (
  <div
    className={`answer ${chosen && 'chosen'}`}
    onClick={onClick}
  >
    {_renderContent([option, content].join('. '))}
  </div>
);

Answer.propTypes = {
  content: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  chosen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Answer;
