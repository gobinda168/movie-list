import styled from '@emotion/styled';
import React from 'react';
import pathUtil from '../../utils/assetsPath';
import SVG from './SVG';

const Loader: React.FC = () => {
  return (
    <Container>
      <SVG src={pathUtil.getImagePath('loader.gif')} />
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
});
export default Loader;
