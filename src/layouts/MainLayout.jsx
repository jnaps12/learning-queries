import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from '../components/Header';

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
