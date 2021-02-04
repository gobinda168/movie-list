import styled from '@emotion/styled';
import Colors from '../../constants/colors';

const RoundedButton = styled.button(
  (props: {
    background?: string;
    color?: string;
    hoverColor?: string;
    hoverBackground?: string;
  }) => ({
    backgroundColor: props.background || Colors.midNightBlue,
    outline: 'none',
    color: props.color || Colors.white,
    border: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    padding: '0 2rem',
    borderRadius: '25px',
    height: '2.7rem',
    cursor: 'pointer',
    margin: '0 1rem',
    ':hover': {
      backgroundColor: Colors.darkGrey,
      color: Colors.white,
    },
    '@media(max-width:500px)': {
      width: '85vw',
      paddingLeft: '1.2rem',
      margin: '0',
      marginBottom: '.5rem',
    },
  })
);

export default RoundedButton;
