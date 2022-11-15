import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import bg from '../assets/ernest-karchmit-UAbg0py6GYQ-unsplash.jpg';

const Container = styled.section`
  height: 100vh;
  color: white;
  background-color: black;
  display: grid;
  place-content: center;
  position: relative;

  &::before {   
      content: "";
      background-image: url(${bg});
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      opacity: 0.4;
      opacity: 0.;
      height: 100%;
      width: 100%;
  }
`;

const Header = styled.h1`
  z-index: 2;
`

export default function Landing() {
  return (
    <Container>
      <Header>Pieces of NFA</Header>
      <Footer />
    </Container>
  );
}