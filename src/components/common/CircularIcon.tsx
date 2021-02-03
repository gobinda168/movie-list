import styled from '@emotion/styled';

const CircularIcon = styled.div(
  (props: { color?: string; padding?: string }) => ({
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: props.color || '#4446BE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0.7',
    cursor: 'pointer',
    padding: props.padding || '0',
  })
);

export default CircularIcon;
