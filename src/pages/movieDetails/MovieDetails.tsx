import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Column from '../../components/common/Column';
import RichText from '../../components/common/RichText';
import Row from '../../components/common/Row';
import Spacer from '../../components/common/Spacer';
import SVG from '../../components/common/SVG';
import { fetchMovieById } from '../../redux/actions/movieActions';

interface Params {
  id: string;
}
const MovieDetails: React.FC = () => {
  const { id } = useParams<Params>();
  const dispatch = useDispatch();
  const baseUrl = `http://www.omdbapi.com/`;
  const url = `${baseUrl}?apikey=10cf295b&i=${id}`;
  const movie = useSelector((state: RootStateOrAny) => state.movies.movie);
  useEffect(() => {
    dispatch(fetchMovieById(url));
  }, []);
  return (
    <>
      {movie ? (
        <Row justifyContent="center" margin="1rem">
          <Column>
            <SVG src={movie?.Poster} width="200" height="300" />
            <Spacer margin="1rem 0">
              <RichText center size="1rem" bold>
                {movie?.Title}
              </RichText>
            </Spacer>
            <Spacer margin="1rem 0">
              <RichText center size="1rem" bold>
                {movie?.Released}
              </RichText>
            </Spacer>
            <Spacer margin="1rem 0">
              <RichText center size="1rem" bold>
                {movie?.Title}
              </RichText>
            </Spacer>
          </Column>
        </Row>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default MovieDetails;
