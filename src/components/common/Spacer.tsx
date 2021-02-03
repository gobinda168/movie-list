import styled from '@emotion/styled';

interface SpacerProps {
  margin?: string;
  padding?: string;
}
const Spacer = styled.div(({ margin, padding }: SpacerProps) => ({
  '>div': {
    margin,
    padding,
  },
}));

export default Spacer;
