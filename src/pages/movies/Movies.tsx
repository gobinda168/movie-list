import styled from '@emotion/styled';
import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/body/MovieCard';
import MovieSearchForm from '../../components/body/MovieSearchForm';
import Loader from '../../components/common/Loader';
import RichText from '../../components/common/RichText';
import Row from '../../components/common/Row';
import { Movie } from '../../redux/reducers/movies';

const Movies: React.FC = () => {
  const movies = useSelector((state: RootStateOrAny) => state.movies.movieList);
  return (
    <>
      {movies ? (
        <div>
          <Row justifyContent="center" spacing="2rem 0 1rem 0">
            <MovieSearchForm />
          </Row>
          {movies.length ? (
            <MoviesContainer>
              {movies.map(({ Title, Poster, Year, imdbID }: Movie) => (
                <MovieCard
                  title={Title}
                  poster={Poster}
                  releaseDate={Year}
                  imdbID={imdbID}
                />
              ))}
            </MoviesContainer>
          ) : (
            <MoviesContainer>
              <RichText size="2rem" center bold>
                Nothing to Display
              </RichText>
            </MoviesContainer>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
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
export default Movies;
