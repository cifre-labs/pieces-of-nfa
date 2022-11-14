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
      <canvas id="canvas-bg" className="jsx-9cb0ad42277920de background" data-engine="three.js r139" width="978" height="795"></canvas>
      <h1>Pieces of NFA</h1>
      <Footer />
    </Container>
  );
}