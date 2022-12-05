import React from 'react';
import { Container, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import ProgressBar from 'react-bootstrap/ProgressBar';

import '../assets/style/Question.css'

export function Question({ data }) {
  const { difficulty, id } = useParams();
  const now = (1/3) * 100;
  return (
    <Container>
      <h1 align="center" className="mt-5">
        Select 1
      </h1>
      <ProgressBar now={now} animated label={`1/3`} />

      <div className="question-box mt-5">
        <Alert variant="primary" align="center">
          Observe o Schema abaixo e organize os bloquinhos para completar a
          Query fazendo o que se pede.
        </Alert>
        <Figure align="center" className="question-image">
          <Figure.Image alt="qualuqer" src="/exemplo.png" />
          <Figure.Caption>
            Busque todos os dados da tabela “usuarios” :
          </Figure.Caption>
        </Figure>

        <div className="droppable">

        </div>
        <div className="draggable">

        </div>
      </div>
    </Container>
  );
}
