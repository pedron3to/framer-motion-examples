import styled from '@emotion/styled';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';
import SideBar from './SideBar';

const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`;

export default function Menu() {
  return (
    <NavWrapper>
      <div>
        <SideBar />
        <Navigation />
        <MenuToggle />
      </div>
    </NavWrapper>
  );
}
