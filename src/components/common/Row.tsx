import styled from '@emotion/styled';
import AnimatedAsset from './AnimatedAsset';

const Row = styled.div(
  (props: { spacing?: string; justifyContent?: string; margin?: string }) => ({
    display: 'flex',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: 'center',
    div: {
      margin: props.spacing,
    },
    '@media(max-width:500px)': {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center',
      div: {
        margin: '.41rem',
      },
    },
  })
);

export default Row;
