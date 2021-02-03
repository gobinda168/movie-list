import styled from '@emotion/styled';
import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import MovieCard from '../../components/body/MovieCard';
import MovieSearchForm from '../../components/body/MovieSearchForm';
import Row from '../../components/common/Row';

const FavouriteMovies: React.FC = () => {
  const movies = useSelector(
    (state: RootStateOrAny) => state.favourites.movies
  );
  return (
    <div>
      <MoviesContainer>
        {movies.map(({ title, poster, releaseDate, imdbID }: any) => (
          <MovieCard
            key={imdbID}
            title={title}
            poster={poster}
            releaseDate={releaseDate}
            imdbID={imdbID}
          />
        ))}
      </MoviesContainer>
    </div>
  );
};

const MoviesContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '>div': {
    margin: '1rem',
  },
});
export default FavouriteMovies;
