import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../../constants/colors';
import pathUtil from '../../utils/assetsPath';
import Row from '../common/Row';
import SVG from '../common/SVG';
import WebView from '../common/WebView';

const Navbar: React.FC = () => {
  return (
    <WebView>
      <TopNavigationBar>
        <Row justifyContent="space-between" spacing="0 1rem">
          <Link to="/">
            <SVG src={pathUtil.getIconPath('logo.svg')} />
          </Link>
          <Row spacing="1rem">
            <Link to="/">Home</Link>
            <Link to="/">Movies</Link>
            <Link to="/favourite">Favourite</Link>
          </Row>
        </Row>
      </TopNavigationBar>
    </WebView>
  );
};

const TopNavigationBar = styled.nav({
  height: '3rem',
  padding: '1rem 0',
  position: 'fixed',
  width: '100vw',
  zIndex: 11,
  fontSize: 'medium',
  backgroundColor: Colors.darkestGrey,
  color: Colors.white,
});
export default Navbar;
