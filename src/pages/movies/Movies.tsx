import styled from '@emotion/styled';
import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/body/MovieCard';
import MovieSearchForm from '../../components/body/MovieSearchForm';
import Loader from '../../components/common/Loader';
import MobileRow from '../../components/common/MobileRow';
import RichText from '../../components/common/RichText';
import RoundedButton from '../../components/common/RoundedButton';
import Row from '../../components/common/Row';
import SVG from '../../components/common/SVG';
import { Movie } from '../../redux/reducers/movies';
import pathUtil from '../../utils/assetsPath';

const Movies: React.FC = () => {
  const movieState = useSelector((state: RootStateOrAny) => state.movies);
  const movies = movieState.movieList;
  const { loading, errors } = movieState;
  return (
    <>
      {!loading ? (
        <div>
          <Row justifyContent="center" spacing="2rem 0 1rem 0">
            <MovieSearchForm />
          </Row>
          {movies?.length ? (
            <MoviesContainer>
              {movies.map(({ Title, Poster, Year, imdbID }: Movie) => (
                <MovieCard
                  key={imdbID}
                  title={Title}
                  poster={Poster}
                  releaseDate={Year}
                  imdbID={imdbID}
                />
              ))}
            </MoviesContainer>
          ) : (
            <MoviesContainer>
              <MobileRow>
                <SVG src={pathUtil.getImagePath('warning.png')} />
                {errors || (
                  <RichText size="2rem" bold center>
                    Sorry! Could not find any match!
                  </RichText>
                )}
              </MobileRow>
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
