import React from 'react';
import Colors from '../../constants/colors';
import pathUtil from '../../utils/assetsPath';
import Card from '../common/Card';
import CircularIcon from '../common/CircularIcon';
import Column from '../common/Column';
import RichText from '../common/RichText';
import RoundedButton from '../common/RoundedButton';
import Row from '../common/Row';
import SVG from '../common/SVG';

interface Props {
  title: string;
  subTitle: string;
  price: string;
}
const shadow = `0px 5px 10px ${Colors.sandyBrown}`;
const PackageDetailsCard: React.FC<Props> = ({
  title,
  subTitle,
  price,
}: Props) => (
  <Column margin="1rem 0">
    <Card shadow={shadow} hover={false}>
      <Row justifyContent="space-between">
        <Row>
          <CircularIcon color={Colors.sandyBrown} padding=".5rem">
            <SVG src={pathUtil.getImagePath('aeroplane.svg')} />
          </CircularIcon>
          <Column spacing="0 1rem">
            <RichText bold color={Colors.darkGrey}>
              {title}
            </RichText>
            <RichText color={Colors.grey} spacing=".4rem 0">
              {subTitle}
            </RichText>
          </Column>
        </Row>
        <Column>
          <RichText color={Colors.grey}>
            {'Estimated Price'.toUpperCase()}
          </RichText>
          <RichText
            bold
            color={Colors.midNightBlue}
            size="1rem"
            spacing=".4rem 0"
          >
            {price}
          </RichText>
        </Column>
        <RoundedButton
          background={Colors.aliceBlue}
          color={Colors.midNightBlue}
        >
          Order Now
        </RoundedButton>
      </Row>
    </Card>
  </Column>
);

export default PackageDetailsCard;
