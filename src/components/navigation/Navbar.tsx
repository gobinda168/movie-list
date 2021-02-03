import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../../constants/colors';
import pathUtil from '../../utils/assetsPath';
import MobileRow from '../common/MobileRow';
import MobileView from '../common/MobileView';
import Row from '../common/Row';
import SVG from '../common/SVG';
import WebView from '../common/WebView';

interface Props {
  toggleSidebar: () => void;
}
const Navbar: React.FC<Props> = ({ toggleSidebar }: Props) => {
  return (
    <TopNavigationBar>
      <MobileRow justifyContent="space-between" padding="0 1rem">
        <Link to="/">
          <SVG src={pathUtil.getIconPath('logo.svg')} />
        </Link>
        <WebView>
          <Row spacing="1rem">
            <Link to="/">Home</Link>
            <Link to="/favourite">Favourite</Link>
          </Row>
        </WebView>
        <MobileView>
          <SVG
            src={pathUtil.getImagePath('menu.png')}
            onClick={toggleSidebar}
          />
        </MobileView>
      </MobileRow>
    </TopNavigationBar>
  );
};

const TopNavigationBar = styled.nav({
  height: '3rem',
  padding: '1rem 0',
  width: '100vw',
  zIndex: 11,
  fontSize: 'medium',
  backgroundColor: Colors.darkestGrey,
  color: Colors.white,
});
export default Navbar;
