import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Colors from '../../constants/colors';
import pathUtil from '../../utils/assetsPath';
import Badge from '../common/Badge';
import MobileRow from '../common/MobileRow';
import MobileView from '../common/MobileView';
import SVG from '../common/SVG';

interface Props {
  borderRadius: string;
}
const initialMenuItems = [
  { id: '1', menuItem: 'Home', selected: false, badge: false, link: '/' },
  {
    id: '3',
    menuItem: 'Favourites',
    selected: false,
    badge: true,
    link: '/favourite',
  },
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
    if (id) toggleSidebar();
  };

  useEffect(() => {
    handleMenuSelect(0);
  }, []);

  return (
    <SidebarContainer borderRadius="0">
      <div>
        <Top>
          <MobileRow justifyContent="space-between">
            <SVG src={pathUtil.getIconPath(`logo.svg`)} cursor="pointer" />
            <MobileView>
              <IconButton onClick={toggleSidebar}>
                <SVG src={pathUtil.getImagePath(`left.png`)} />
              </IconButton>
            </MobileView>
          </MobileRow>
        </Top>
        <Menu>
          {menuItems.map((menuItem, index) => (
            <Link to={menuItem.link} key={menuItem.id}>
              <MenuItem
                selected={menuItem.selected}
                onClick={() => handleMenuSelect(index)}
              >
                <Text opacity="1" cursor="pointer">
                  {menuItem.menuItem}
                </Text>
                {menuItem.badge && <Badge>{badgeValue}</Badge>}
              </MenuItem>
            </Link>
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
