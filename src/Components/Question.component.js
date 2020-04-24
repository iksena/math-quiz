import React from 'react';
import Latex from 'react-latex';
import PropTypes from 'prop-types';

const _renderContent = (content) => (
  <Latex>{content}</Latex>
);

const _renderImage = (image, index) => (
  <>
    <h4>
      Image
      {index + 1}
    </h4>
    <br />
    <img src={image} alt={`image ${index + 1}`} />
  </>
);

const _renderImages = (images) => images.map(_renderImage);

const Question = ({ content, images }) => (
  <>
    {_renderContent(content)}
    {_renderImages(images)}
  </>
);

Question.propTypes = {
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
  })).isRequired,
};

export default Question;
