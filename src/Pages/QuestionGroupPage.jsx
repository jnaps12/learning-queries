import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export function QuestionGroupPage() {
  return (
    <>
      <Container>
        <h1 align="center" className="mt-5">
          Select 1
        </h1>
      </Container>
      <Outlet />
    </>
  );
}
