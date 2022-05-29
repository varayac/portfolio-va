import styled from 'styled-components'

// Nav
export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #0a192f;
`
// Wrapper
export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

// Nav Logo & Brand
export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Inter';
  font-size: 1.2rem;
  color: #e6f1ff;
`

// Nav Menu
export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: 'Dosis';
  font-weight: 100;
`
export const MenuLink = styled.a`
  text-decoration: none;
  color: #e6f1ff;
  padding-left: 1em;
`
export const MenuSpan = styled.span`
  color: #64ffda;
  padding-left: 1em;
`
