import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export function Question({ data }) {
  const { difficulty, id } = useParams();

  console.log(difficulty);
  console.log(id);

  return <div>Question</div>;
}
