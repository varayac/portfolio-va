/*
import styled from 'styled-components'

// Usar Props y ternarios:
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.h1`
  color: ${({ color }) => (color ??= '#ff00ff')};
  font-size: 4rem;
  font-family: sans-serif;
  margin: 0.5rem;
`
// ----------------------------------------------------

// Herencia:
export const Header = styled.h1`
  color: #393939;
  font-size: 4rem;
  font-family: sans-serif;
  margin: 0.5rem;
`
// Hereda
export const HeaderClon = styled(Header)`
  color: #000;
  font-family: monospace;
`
// ----------------------------------------------------

// Modificar componentes dentro de componentes:
export const Header = styled.div`
  h1 {
    font-size: 4rem;
    color: 393939;
    font-family: sans-serif;
  }

  p {
    font-size: 0.8rem;
    color: #000;
    font-family: monospace;
  }
`
// ----------------------------------------------------

// Usar Hover, Befor y After con &:
export const Header = styled.h1`
  color: #393939;
  font-size: 3rem;
  font-family: sans-serif;
  position: relative;
  z-index: 1;

  &.blue {
    color: beige;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &:hover {
    background-color: #404040;
    color: #fff;
    transition: 0.3s all ease;

    &:before {
      background-color: red;
    }
  }
`
*/
