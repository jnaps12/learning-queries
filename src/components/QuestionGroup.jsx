import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { BASE_URL } from '../api/axios';
import SpinnerComponent from './SpinnerComponent';

export function QuestionGroup({
  id,
  name,
  icon,
  difficulty,
  done,
}) {
  // buscar questões a partir do id do group;

  const [{ data, loading, error }] = useAxios(
    `${BASE_URL}/question/groupid/${id}`
  );

  // console.log(data);
  if (loading) return <SpinnerComponent />
  if (error) return <h2>erro</h2>;

  let questionid = data?.id;

  return (
    <Link
      className="question-card-link"
      to={`/questions/${difficulty}/${id}/question/${questionid}`}
    >
      <Card
        style={{ width: '8.5rem' }}
        className={`text-center ${done ? 'completed' : ''}`}
        border="primary"
      >
        <Card.Img
          variant="top"
          src={icon}
          style={{ width: '3rem', margin: '5px auto 0 auto' }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
