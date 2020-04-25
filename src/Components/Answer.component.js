import React from 'react';
import PropTypes from 'prop-types';
import Markdown from './Markdown.component';

const _renderContent = (content) => (
  <Markdown source={content} />
);

const Answer = ({ content }) => (
  <>
    {_renderContent(content)}
  </>
);

Answer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Answer;
