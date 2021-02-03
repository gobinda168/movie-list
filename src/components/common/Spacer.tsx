import styled from '@emotion/styled';

interface SpacerProps {
  margin?: string;
  padding?: string;
}
const Spacer = styled.div(({ margin, padding }: SpacerProps) => ({
  margin,
  padding,
}));

export default Spacer;
