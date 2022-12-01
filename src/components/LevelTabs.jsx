import Nav from 'react-bootstrap/Nav';

export function LevelTabs() {
  return (
    <div className="mb-5">
      <Nav fill variant="tabs">
        <Nav.Item>
          <Nav.Link activeKey="easy" eventKey="easy" href="/questions/easy">
            Fácil
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            activeKey="intermediary"
            eventKey="intermediary"
            href="/questions/intermediary"
          >
            Intermediário
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link activeKey="hard" eventKey="hard" href="/questions/hard">
            Difícil
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
