import styled from '@emotion/styled';
import Colors from '../../constants/colors';

const RoundedButton = styled.button(
  (props: { background?: string; color?: string }) => ({
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
    ':hover': {
      backgroundColor: Colors.slateBlue,
      color: Colors.white,
    },
  })
);

export default RoundedButton;
