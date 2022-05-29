import { GiShiningHeart } from 'react-icons/gi'
import {
  NavbarContainer,
  NavbarWrapper,
  IconLogo,
  Menu,
  MenuItem,
  MenuLink,
  MenuSpan,
} from './NavBar.elements'

const NavBar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            <GiShiningHeart size={'2em'} color={'#64ffda'} /> Varayac
          </IconLogo>
          <Menu>
            <MenuItem>
              <MenuLink>
                <MenuSpan>01.</MenuSpan> About
              </MenuLink>
              <MenuLink>
                <MenuSpan>02.</MenuSpan> Skills
              </MenuLink>
              <MenuLink>
                <MenuSpan>03.</MenuSpan> Projects
              </MenuLink>
              <MenuLink>
                <MenuSpan>04.</MenuSpan> Contact
              </MenuLink>
            </MenuItem>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  )
}

export default NavBar
