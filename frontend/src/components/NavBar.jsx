import React from 'react';
import { styled } from 'styled-components';

const StyledNavBar = styled.nav`
  background-color: #333;
  color: #fafafa;
  text-align: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4d4d4d;
  }
`;

function NavBar() {
  return (
    <StyledNavBar>
      <p>Lucas dos Santos Melo</p>
    </StyledNavBar>
  );
}

export default NavBar;
