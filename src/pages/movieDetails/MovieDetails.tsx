import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails: React.FC = () => {
  const params = useParams();
  return <div>{JSON.stringify(params)}</div>;
};

export default MovieDetails;
