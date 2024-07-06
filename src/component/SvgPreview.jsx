// src/SvgPreview.js
import React from 'react';


const SvgPreview = ({ svgCode }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: svgCode }} />
  );
};

export default SvgPreview;
