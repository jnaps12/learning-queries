import { Container } from 'react-bootstrap';
import '../assets/style/board.css';
import { LevelTabs } from '../components/LevelTabs';
import { Outlet } from 'react-router-dom';

export function BoardQuestions() {
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
