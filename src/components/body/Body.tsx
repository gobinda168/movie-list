import styled from '@emotion/styled';
import React from 'react';
import Colors from '../../constants/colors';
import MovieSearchForm from './MovieSearchForm';

interface Props {
  toggleSidebar: () => void;
}
const Body: React.FC<Props> = ({ toggleSidebar }: Props) => {
  return (
    <BodyContainer>
      <SearboxContainer>
        <MovieSearchForm />
      </SearboxContainer>
    </BodyContainer>
  );
};

export default Body;

const BodyContainer = styled.div({
  backgroundColor: 'white',
  paddingBottom: '4rem',
  '@media(max-width:500px)': {
    paddingBottom: '1rem',
  },
});

const SearboxContainer = styled.div({
  height: 'calc(100vh - 5rem)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
