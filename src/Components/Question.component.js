import React from 'react';
import PropTypes from 'prop-types';

import Markdown from './Markdown.component';
import '../App.css';

const _renderContent = (content) => (
  <Markdown source={content} />
);

const Question = ({ content }) => (
  <div className="question">
    {_renderContent(content)}
  </div>
);

Question.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Question;
