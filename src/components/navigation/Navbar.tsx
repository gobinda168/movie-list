import styled from '@emotion/styled';
import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';
import Colors from '../../constants/colors';
import pathUtil from '../../utils/assetsPath';
import Badge from '../common/Badge';
import MobileRow from '../common/MobileRow';
import MobileView from '../common/MobileView';
import Row from '../common/Row';
import SVG from '../common/SVG';
import WebView from '../common/WebView';

interface Props {
  toggleSidebar: () => void;
}
const Navbar: React.FC<Props> = ({ toggleSidebar }: Props) => {
  const badgeValue = useSelector(
    (state: RootStateOrAny) => state.favourites.movieList.length
  );
  return (
    <TopNavigationBar>
      <MobileRow justifyContent="space-between" padding="0 2.5rem">
        <Link to="/">
          <SVG src={pathUtil.getIconPath('logo.svg')} cursor="pointer" />
        </Link>
        <WebView>
          <Row spacing="1rem">
            <Link to="/">Home</Link>
            <Link to="/favourite">
              <Row>
                Favourite
                <Badge>{badgeValue}</Badge>
              </Row>
            </Link>
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
  zIndex: 11,
  fontSize: 'medium',
  backgroundColor: Colors.darkestGrey,
  color: Colors.white,
});
export default Navbar;
