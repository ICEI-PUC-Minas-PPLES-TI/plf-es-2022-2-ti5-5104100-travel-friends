import { Container, Col, Row, Figure, Nav, Form, Button, Navbar, Dropdown } from 'react-bootstrap';
import LogoTipo from '../../assets/logo-web.png';
import User from '../../assets/user-icon.svg';
import { userHook } from '../../context/userData';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ children }: any) => {
  const { userData } = userHook();
  const navigate = useNavigate();

  const handleSelect = (e: any) => {
    if(e === 'passeio'){
      navigate('/cadastrar-roteiro');
    }
    if(e === 'local'){
      navigate('/cadastrar-local');
    }
    console.log(e);
  }

    return (
      <Container className='h-100' fluid>
        <Row className='h-100'>
          <Col sm={2} style={{backgroundColor: '#F5F5F5'}}>
            <Figure className='text-center'>
              <Figure.Image width="70%" alt="171x180" src={LogoTipo}/>
            </Figure>
  
            <Nav defaultActiveKey="/painel" className="flex-column">
              <Nav.Link href="/painel">Início</Nav.Link>
              <Nav.Link href="/locais">Locais</Nav.Link>
              <Nav.Link href='/entrar'>Sair</Nav.Link>
            </Nav>
          </Col>
  
          <Col sm={10}>
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Pesquisar roteiro"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Pesquisar</Button>
                </Form> */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/painel">Explorar</Nav.Link>
                  <Nav.Link href="/locais">Meus roteiros</Nav.Link>
                </Nav>
                <Nav className="me-5">
                  <Dropdown onSelect={(e) => handleSelect(e)}>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">Criar</Dropdown.Toggle>
                    <Dropdown.Menu >
                      <Dropdown.Item eventKey='local'>Local</Dropdown.Item>
                      <Dropdown.Item eventKey='passeio'>Passeio</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
                <Nav>
                  <Nav.Link>{userData.name}</Nav.Link>
                  <Nav.Link>
                    <img
                      src={User}
                      className="d-inline-block align-top"
                      alt="Logo usuário"
                    />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
              {children}
          </Col>
        </Row>
      </Container>
    );
};

export default Navigation;
