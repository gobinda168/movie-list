import styled from '@emotion/styled';
import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/body/MovieCard';
import MovieSearchForm from '../../components/body/MovieSearchForm';
import Row from '../../components/common/Row';
import { Movie } from '../../redux/reducers/movies';

const FavouriteMovies: React.FC = () => {
  const movies = useSelector(
    (state: RootStateOrAny) => state.favourites.movies
  );
  return (
    <div>
      <Row justifyContent="center" spacing="2rem 0 1rem 0">
        <MovieSearchForm />
      </Row>
      <MoviesContainer>
        {movies.map(({ title, poster, year, imdbID }: any) => (
          <MovieCard
            title={title}
            poster={poster}
            releaseDate={year}
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
