import styled from '@emotion/styled';
import React from 'react';
import Colors from '../../constants/colors';
import sampleData from '../../constants/data';
import pathUtil from '../../utils/assetsPath';
import Column from '../common/Column';
import MobileRow from '../common/MobileRow';
import MobileView from '../common/MobileView';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import Spacer from '../common/Spacer';
import SVG from '../common/SVG';
import WebView from '../common/WebView';
import FeaturedCard from './FeaturedCard';
import Heading from './Heading';
import PackageDetailsCard from './PackageDetailsCard';
import MovieSearchForm from './MovieSearchForm';

interface Props {
  toggleSidebar: () => void;
}
const Body: React.FC<Props> = ({ toggleSidebar }: Props) => {
  return (
    <BodyContainer>
      <TopNavigationBar>
        <Row justifyContent="space-between" spacing="0 1rem">
          <div>
            <SVG src={pathUtil.getIconPath('logo.svg')} />
          </div>
          <Row spacing="1rem">
            <div>Home</div>
            <div>Movies</div>
            <div>Favourite</div>
          </Row>
        </Row>
      </TopNavigationBar>
      <SearboxContainer>
        <MovieSearchForm />
      </SearboxContainer>
    </BodyContainer>
  );
};

export default Body;

const TopNavigationBar = styled.nav({
  height: '3rem',
  padding: '1rem 0',
  position: 'sticky',
  backgroundColor: Colors.darkestGrey,
  color: Colors.white,
});
const IconButton = styled.button({
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  ':focus': {
    border: 'none',
    outline: 'none',
  },
});

const BodyContainer = styled.div({
  backgroundColor: 'white',
  paddingBottom: '4rem',
  '@media(max-width:500px)': {
    paddingBottom: '1rem',
  },
});

const SearboxContainer = styled.div({
  backgroundColor: Colors.aliceBlue,
  height: 'calc(100vh - 5rem)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
