import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo_bluebg.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Learning Queries
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <DropdownButton
              id='menu'
              variant='info'
              size='sm'
              title='Username Here'
            >
              <Dropdown.Item eventKey="1" href='/home'>Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Perfil</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Sair</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
