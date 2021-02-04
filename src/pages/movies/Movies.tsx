import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/body/MovieCard';
import MovieSearchForm from '../../components/body/MovieSearchForm';
import Loader from '../../components/common/Loader';
import MobileRow from '../../components/common/MobileRow';
import RichText from '../../components/common/RichText';
import RoundedButton from '../../components/common/RoundedButton';
import Row from '../../components/common/Row';
import SVG from '../../components/common/SVG';
import { fetchMovieList } from '../../redux/actions/movieActions';
import { Movie } from '../../redux/reducers/movies';
import pathUtil from '../../utils/assetsPath';
import { API_KEY, BASE_URL } from '../../utils/config';

const Movies: React.FC = () => {
  const movieState = useSelector((state: RootStateOrAny) => state.movies);
  const dispatch = useDispatch();
  const movies = movieState.movieList;
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, errors, urlParams } = movieState;
  const newUrl = `${BASE_URL}?apikey=${API_KEY}&s=${urlParams.search}&page=${currentPage}&type=${urlParams.filter}`;
  useEffect(() => {
    dispatch(fetchMovieList(newUrl));
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage > -1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      {!loading ? (
        <div>
          <Row justifyContent="center" spacing="2rem 0 1rem 0">
            <MovieSearchForm />
          </Row>
          {movies?.length ? (
            <Container>
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
              <Pagination>
                <RoundedButton onClick={nextPage}>Next</RoundedButton>
                <RoundedButton onClick={previousPage}>Previous</RoundedButton>
              </Pagination>
            </Container>
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

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem 0',
  justifyContent: 'center',
});
const Pagination = styled.div({
  display: 'flex',
  flexDirection: 'row',
  margin: '2rem',
  justifyContent: 'center',
  '@media(max-width:500px)': {
    flexDirection: 'column',
  },
});

const MoviesContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '>div': {
    margin: '1rem',
  },
});
export default Movies;
