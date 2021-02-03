import styled from '@emotion/styled';

const Layout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f4f4f4',
  '@media(max-width:500px)': {
    gridTemplateColumns: '1fr',
  },
});

export default Layout;
