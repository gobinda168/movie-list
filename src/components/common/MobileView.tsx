import styled from '@emotion/styled';

const MobileView = styled.div({
  '@media(min-width:500px)': {
    display: 'none',
  },
});

export default MobileView;
