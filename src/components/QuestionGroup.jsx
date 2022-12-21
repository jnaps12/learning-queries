import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

export function QuestionGroup({ id, name, icon, difficulty, done, questionid }) {


  function handleClick(){
    const data = {
      id: 1,
      query: 'Select * from Irineu',
      difficulty: difficulty,
      thumb_url:
        'https://imgs.search.brave.com/fnd-zwAf4xDKmew6PXnrwqrOy5CntNeiVYIe-GPlVDg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/SUlBb0NTU0d2OEVC/c1Y5OXFlT3lBSGFF/OCZwaWQ9QXBp',
      titile: 'Select 1',
      description: 'Busque o que se pede'
    };
  }


  return (
    <Link className="question-card-link" to={`/questions/${difficulty}/${id}/question/${questionid}`} onClick={handleClick}>
      <Card style={{ width: '6rem' }} className="text-center" border="primary">
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
