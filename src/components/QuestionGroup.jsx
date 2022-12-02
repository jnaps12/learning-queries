import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export function QuestionGroup() {
  return (
    // <Card border="primary" style={{ width: '18rem' }}>
    //   <Card.Header>Header</Card.Header>
    //   <Card.Body>
    //     <Card.Title>Primary Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //   </Card.Body>
    // </Card>

    <Link className='question-card-link'>
      <Card bg="primary" style={{ width: '6rem' }} className="text-center">
        <Card.Img
          variant="top"
          src="/logo_blackbg.svg"
          style={{ width: '3rem', margin: '5px auto 0 auto' }}
        />
        <Card.Body>
          <Card.Title>Select</Card.Title>
        </Card.Body>
      </Card>
    </Link>

    // <Card bg='primary' style={{ width: '8rem' }}>
    //   <Card.Header className="text-center">
    //     <Card.Img
    //       variant="top"
    //       src="/logo_blackbg.svg"
    //       style={{ width: '3rem', margin: '0 auto' }}
    //     />
    //   </Card.Header>
    //   <Card.Body className="text-center">
    //     <Card.Title>Select</Card.Title>
    //   </Card.Body>
    // </Card>
  );
}
