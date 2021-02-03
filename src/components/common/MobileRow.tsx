import styled from '@emotion/styled';

const MobileRow = styled.div(
  (props: {
    spacing?: string;
    justifyContent?: string;
    mJustifyContent?: string;
    margin?: string;
    padding?: string;
  }) => ({
    display: 'flex',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: 'center',
    padding: props.padding,
    div: {
      margin: props.spacing,
    },
    '@media(max-width:500px)': {
      justifyContent: props.mJustifyContent,
      div: { marginRight: '.4rem' },
    },
  })
);
export default MobileRow;
