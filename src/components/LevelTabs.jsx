import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';
export function LevelTabs() {

  return (
    <div className="mb-5" defaultActiveKey="easy">
      <Nav fill variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="easy" as={Link} to="/questions/easy">
            Fácil
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="intermediary"
            as={Link}
            to="/questions/intermediary"
          >
            Intermediário
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="hard" as={Link} to="/questions/hard">
            Difícil
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
