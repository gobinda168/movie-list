import styled from '@emotion/styled';

const Column = styled.div((props: { spacing?: string; margin?: string }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: props.margin || '0',
  div: {
    margin: props.spacing || '0',
  },
}));

export default Column;
