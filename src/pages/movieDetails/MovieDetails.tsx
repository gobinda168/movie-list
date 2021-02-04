import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/common/Loader';
import RichText from '../../components/common/RichText';
import Spacer from '../../components/common/Spacer';
import SVG from '../../components/common/SVG';
import { fetchMovieById } from '../../redux/actions/movieActions';
import { API_KEY, BASE_URL } from '../../utils/config';

interface Params {
  id: string;
}
const MovieDetails: React.FC = () => {
  const { id } = useParams<Params>();
  const dispatch = useDispatch();
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}`;
  const movie = useSelector((state: RootStateOrAny) => state.movies.movie);
  useEffect(() => {
    dispatch(fetchMovieById(url));
  }, []);
  return (
    <>
      {movie ? (
        <MovieDetailsContainer>
          <SVG src={movie?.Poster} width="200" height="300" />
          <Spacer margin="1rem 1rem">
            <RichText size="2rem" bold>
              {`${movie?.Title.toUpperCase()}`}
            </RichText>
            <RichText size="1rem">{`Released Date: ${movie?.Released}`}</RichText>
            <RichText size="1rem">{`Genre: ${movie?.Genre}`}</RichText>
            <RichText size="1rem">{`Director: ${movie?.Director}`}</RichText>
            <RichText size="1rem">{`Actors: ${movie?.Actors}`}</RichText>
            <RichText size="1rem">{`IMDB Rating: ${movie?.imdbRating}`}</RichText>
            <RichText size="1rem">{`Production: ${movie?.Production}`}</RichText>
          </Spacer>
        </MovieDetailsContainer>
      ) : (
        <Loader />
      )}
    </>
  );
};

const MovieDetailsContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
  '@media(max-width:500px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
export default MovieDetails;
