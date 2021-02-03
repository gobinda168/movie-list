import React from 'react';
import Colors from '../../constants/colors';
import Column from '../common/Column';
import RichText from '../common/RichText';

interface Props {
  title: string;
  subTitle: string;
}

const Heading: React.FC<Props> = ({ title, subTitle }: Props) => {
  return (
    <Column>
      <RichText bold size="1.2rem" spacing="1rem 0" color={Colors.darkGrey}>
        {title}
      </RichText>
      <RichText color={Colors.grey}>{subTitle}</RichText>
    </Column>
  );
};

export default Heading;
