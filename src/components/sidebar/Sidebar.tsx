import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Colors from '../../constants/colors';
import pathUtil from '../../utils/assetsPath';
import MobileRow from '../common/MobileRow';
import MobileView from '../common/MobileView';
import SVG from '../common/SVG';

interface Props {
  borderRadius: string;
}
const initialMenuItems = [
  { id: '1', menuItem: 'Home', selected: false, badge: false },
  { id: '3', menuItem: 'Favourites', selected: false, badge: true },
];

interface SidebarProps {
  toggleSidebar: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }: SidebarProps) => {
  const badgeValue = useSelector(
    (state: RootStateOrAny) => state.favourites.movieList.length
  );
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const handleMenuSelect = (id: number) => {
    const newMenu = [...initialMenuItems];
    newMenu[id] = { ...newMenu[id], selected: true };
    setMenuItems(newMenu);
  };

  useEffect(() => {
    handleMenuSelect(0);
  }, []);

  const { getImagePath } = pathUtil;
  return (
    <SidebarContainer borderRadius="0">
      <div>
        <Top>
          <MobileRow justifyContent="space-between">
            <SVG src={pathUtil.getIconPath(`logo.svg`)} />
            <MobileView>
              <IconButton onClick={toggleSidebar}>
                <SVG src={pathUtil.getImagePath(`left.png`)} />
              </IconButton>
            </MobileView>
          </MobileRow>
        </Top>
        <Menu>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={menuItem.id}
              selected={menuItem.selected}
              onClick={() => handleMenuSelect(index)}
            >
              <Text opacity="1" cursor="pointer">
                {menuItem.menuItem}
              </Text>
              {menuItem.badge && <Badge>{badgeValue}</Badge>}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </SidebarContainer>
  );
};
export default Sidebar;

const IconButton = styled.button({
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  ':focus': {
    border: 'none',
    outline: 'none',
  },
});

const Badge = styled.div({
  width: '32px',
  height: '17px',
  backgroundColor: Colors.gold,
  borderRadius: '9px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  marginLeft: '1rem',
});

const SidebarContainer = styled.div((props: Props) => ({
  minWidth: '223px',
  background: Colors.darkestGrey,
  borderRadius: props.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media(max-width:500px)': {
    height: '100vh',
  },
}));

const Avatar = styled.div((props: { imageUrl: string }) => ({
  height: '60px',
  width: '60px',
  borderRadius: '50%',
  padding: '0',
  backgroundImage: `url(${props.imageUrl})`,
  border: '1px solid #A0A4DF',
  backgroundPosition: 'center',
  boxShadow: '0px 3px 6px #00000029',
  backgroundSize: '80px 90px',
  opacity: '0.85',
}));

const Top = styled.div({
  margin: '1rem 2.5rem',
  color: 'white',
  fontsize: '1rem',
  div: {
    marginTop: '.6rem',
  },
});

const Text = styled.div(
  (props: { underline?: boolean; opacity?: string; cursor?: string }) => ({
    textAlign: 'left',
    font: 'normal normal .8rem Inter',
    textDecoration: props.underline ? 'underline' : 'none',
    opacity: props.opacity,
    fontFamily: 'Inter',
    cursor: props.cursor || 'auto',
  })
);

const Menu = styled.div({
  marginTop: '45px',
  fontFamily: 'Inter',
  div: {
    marginTop: '.1rem',
  },
});

const MenuItem = styled.div((props: { selected: boolean }) => ({
  display: 'flex',
  padding: '0 2.5rem',
  alignItems: 'center',
  marginTop: '4px',
  height: '2.7rem',
  borderRadius: '0 23px 0 24px',
  backgroundColor: props.selected ? 'rgba(242,242,242, 0.1)' : 'transparent',
  color: 'white',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'rgba(242,242,242, 0.1)',
  },
}));
