import styled from '@emotion/styled';
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Colors from '../../constants/colors';
import RichText from '../common/RichText';
import Row from '../common/Row';
import Spacer from '../common/Spacer';
import MovieCard from './MovieCard';
import MovieSearchForm from './MovieSearchForm';

const Body: React.FC = () => {
  const movies = useSelector(
    (state: RootStateOrAny) => state.favourites.movies
  );
  return (
    <BodyContainer>
      <SearboxContainer>
        <MovieSearchForm />
      </SearboxContainer>
      {movies.length && (
        <>
          <Spacer margin="2rem 0">
            <Row justifyContent="center">
              <RichText size="2rem" bold>
                FAVOURITES
              </RichText>
            </Row>
          </Spacer>
          <MoviesContainer>
            {movies
              .slice(0, 8)
              .map(({ title, poster, releaseDate, imdbID }: any) => (
                <MovieCard
                  key={imdbID}
                  title={title}
                  poster={poster}
                  releaseDate={releaseDate}
                  imdbID={imdbID}
                />
              ))}
          </MoviesContainer>
        </>
      )}
    </BodyContainer>
  );
};

export default Body;

const MoviesContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '>div': {
    margin: '1rem',
  },
});
const BodyContainer = styled.div({
  backgroundColor: Colors.white,
  paddingBottom: '4rem',
  '@media(max-width:500px)': {
    paddingBottom: '1rem',
  },
});

const SearboxContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: Colors.white,
  flexGrow: 1,
});
