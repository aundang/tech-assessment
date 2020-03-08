import React from 'react';

const movieTiles = (props) => {
  const synopsisShort = { __html: props.synopsisShort };

  return (
    <div className="tile">
      <div className="title">{ props.title }</div>
      <div className="image">{ props.image }</div>
      <div className="synopsisShort" dangerouslySetInnerHTML={ synopsisShort } 
      />
    </div>
  );
};


export default movieTiles;
