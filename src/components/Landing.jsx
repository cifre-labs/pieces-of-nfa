import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const Container = styled.section`
  height: 100vh;
  background-color: black;
  color: white;
  display: grid;
  place-content: center;
`;

export default function Landing() {
  return (
    <Container>
      <h1>Pieces of NFA</h1>
      <Footer />
    </Container>
  );
}