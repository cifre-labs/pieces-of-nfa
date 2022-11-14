import React from 'react';
import styled from 'styled-components';
import cifreLogo from '../assets/cifre-logo.svg';

const Container = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  gap: 5px;
  padding: 10px;
  border-radius: 10px 0px 10px 0px;
  color: white;
  text-decoration: none;
  transition: 0.3s ease;

  :hover {
    color: black;
    border-radius: 0px;
  }
`;

const Logo = styled.img`
  height: 20px;
  width: 20px;
`;

export default function Footer() {
  return (
    <Container href='https://twitter.com/cifrelabs' target='_blank'>
      <span>
        by Cifre Labs
      </span>
      <Logo src={cifreLogo} alt='Cifre Labs Logo'/>
    </Container>
  );
}