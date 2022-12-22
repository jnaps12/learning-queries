import { Container } from 'react-bootstrap';
import '../assets/style/board.css';
import { LevelTabs } from '../components/LevelTabs';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function BoardQuestions() {
  const [url, setUrl] = useState(window.location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    if (url === '/questions' || url === '/question/') {
      navigate('/questions/easy');
      setUrl('/questions/easy');
    }
  }, [url]);

  
  return (
    <div className="Board">
      <h1>Questões</h1>
      <Container className="mt-5">
        <LevelTabs />
        <Outlet />
      </Container>
    </div>
  );
}
