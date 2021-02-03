import styled from '@emotion/styled';

const AnimatedAsset = styled.img(
  (props: { cursor?: string; scale?: string }) => ({
    cursor: props.cursor || 'auto',
    transition: 'all 200ms linear',
    transform: props.scale,
  })
);

export default AnimatedAsset;
