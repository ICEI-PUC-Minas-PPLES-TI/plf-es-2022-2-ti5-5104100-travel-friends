import { Container, Col, Row, Figure, Nav, Navbar, Dropdown } from 'react-bootstrap';
import LogoTipo from '../../assets/icons/logo-web.png';
import User from '../../assets/icons/user-icon.svg';
import { userHook } from '../../context/userData';
import { useNavigate } from 'react-router-dom';
import Chat from '../Chat/client';
import React from 'react';

const Navigation = ({ children }: any) => {
  const { userData, setUser } = userHook();
  const navigate = useNavigate();

  const handleSelect = (e: any) => {
    if(e === 'passeio'){
      navigate('/cadastrar-roteiro');
    }
    if(e === 'local'){
      navigate('/cadastrar-local');
    }
  }

  const handleNavegate = (path: string) => {
    navigate(path);
  }

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

    return (
      <Container className='h-100' fluid>
        <Row className='h-100'>
          <Col sm={2} style={{backgroundColor: '#F5F5F5'}}>
            <Figure className='text-center'>
              <Figure.Image width="70%" alt="171x180" src={LogoTipo}/>
            </Figure>
  
            <Nav defaultActiveKey="/painel" className="flex-column">
              <Nav.Link onClick={() => handleNavegate("/painel")} style={{color: 'rgb(2 64 106)'}}>Início</Nav.Link>
              <Nav.Link onClick={() => handleNavegate("/locais")} style={{color: 'rgb(2 64 106)'}}>Locais</Nav.Link>
              <Nav.Link onClick={() => handleLogout()} style={{color: 'rgb(2 64 106)'}}>Sair</Nav.Link>
            </Nav>
          </Col>
  
          <Col sm={10}>
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link onClick={() => handleNavegate("/painel")}>Explorar</Nav.Link>
                  <Nav.Link onClick={() => handleNavegate("/passeios")}>Meus roteiros</Nav.Link>
                  <Nav.Link onClick={() => handleNavegate("/locais")}>Meus locais</Nav.Link>
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
        <Chat />
      </Container>
    );
};

export default Navigation;
