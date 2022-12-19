import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from '../components/Header';

export function Main({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
