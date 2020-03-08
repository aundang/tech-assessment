import React from 'react';

const MovieDetails = (props) => {
  const synopsis = { __html: props.movieDetails.synopsis };

  return (
    <div className="detailsWrapper">
      <h1 className="title">{ props.movieId }</h1>
      <div className="image">{ props.movieDetails.image }</div>
      <div className="yearGenreWrapper">
        <div className="year">year of movie: { props.movieDetails.productionYear }</div>
        <div className="genre">genre: { props.movieDetails.genre }</div>
      </div>
      <div className="synopsis" dangerouslySetInnerHTML={ synopsis } />
    </div>
  );
};

export default MovieDetails;