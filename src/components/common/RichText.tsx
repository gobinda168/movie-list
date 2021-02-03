import styled from '@emotion/styled';

const RichText = styled.div(
  (props: {
    color?: string;
    bold?: boolean;
    size?: string;
    spacing?: string;
  }) => ({
    color: props.color,
    fontSize: props.size,
    fontWeight: props.bold ? 'bold' : 'inherit',
    padding: props.spacing,
  })
);

export default RichText;
