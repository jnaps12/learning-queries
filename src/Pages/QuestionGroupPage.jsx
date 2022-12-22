import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Outlet } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { BASE_URL } from '../api/axios';
import SpinnerComponent from '../components/SpinnerComponent';

export function QuestionGroupPage() {

  const { questionid } = useParams();

  const [{ data, loading, error }] = useAxios(
    `${BASE_URL}/question/${questionid}`
  );

  
  if(error) return <h2>errou</h2>
  if(loading) return <SpinnerComponent />


  return (
    <>
      <Container>
        <h1 align="center" className="mt-5">
          {data && data?.title}
        </h1>
      </Container>
      <Outlet />
    </>
  );
}
