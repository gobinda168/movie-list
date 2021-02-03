import styled from '@emotion/styled';

const SVG = styled.img((props: { cursor?: string }) => ({
  cursor: props.cursor || 'auto',
}));

export default SVG;
