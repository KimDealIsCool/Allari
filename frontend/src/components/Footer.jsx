import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #ddd;
  text-align: center;
  padding: 16px;
  transition: background-color 0.3s ease;

  a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #e74c3c;
    font-weight: 500;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <a href="https://allari.com/" target="_blank" rel="noopener noreferrer">
        Allari Link
      </a>
    </StyledFooter>
  );
}

export default Footer;
