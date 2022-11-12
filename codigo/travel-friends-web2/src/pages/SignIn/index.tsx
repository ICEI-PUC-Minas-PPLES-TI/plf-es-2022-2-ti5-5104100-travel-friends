import { useState } from 'react';
import { Container, Row, Col,Form, Figure, Alert } from 'react-bootstrap';
import { ContainerSC, LinkSC, BoxForm, Title } from './signin.styled';
import { loginUser } from '../../services/api/Requests/login';
import { Button } from '../../components';
import { userHook } from '../../context/userData';
import planet from '../../assets/icon-planet.svg';
import logo from '../../assets/logo-app.png';
import { Theme } from '../../utils';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const { setUser } = userHook();
  
  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    const response: unknown = await loginUser(values);
    if(response?.status === 200){
      setUser(response?.data);
      navigate('/');
    }
    else{
      setMessage(true);
    }
    setValidated(true);
  };

  return (
    <ContainerSC fluid>
      <Row className='h-100'>
        <Col sm={7} className="align-items-center align-self-center">
          <Figure className='text-center'>
            <Figure.Image width="70%" alt="171x180" src={planet}/>
            <Figure.Caption style={{padding: '0 15%'}} className="mt-3 text-justify">
              Conectando pessoas a lugares e experiências incríveis! Com a Travel Friends você descobre os melhores rolês próximos a você e pode participar de um grupo ou criar o seu próprio. O tema você escolhe... seja balada, trilha, família...
            </Figure.Caption>
          </Figure>
        </Col>
        <BoxForm sm={5}>
            <Container className='h-100 d-inline'>
              <Col className='text-center mb-3'>
                <img src={logo} width="142" alt="Logo" />
                <Title>Login</Title>
              </Col>
              <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)} className="me-5 ms-5">
                {message && <Alert variant='danger'>Dados inseridos não estão corretos!</Alert>}
                <Form.Group className="mb-4">
                  <Form.Label className='text-white'>Email</Form.Label>
                  <Form.Control type="email" name="email" value={values.email} onChange={(e) => {
                    values.email = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira seu email" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Senha</Form.Label>
                  <Form.Control type="password" name="password" value={values.password} onChange={(e) => {
                    values.password = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira a senha" required/>
                </Form.Group>
                <Form.Group className='mt-4'>
                  <Button
                    type='submit'
                    bg={Theme.colors.yellow}
                    color="white"
                    children = "Entrar"/>
                </Form.Group>
                <Col className="mt-3 d-grid text-center">
                  <Form.Label>
                   <LinkSC to='/reset'>Esqueci a senha</LinkSC>
                  </Form.Label>
                  <Form.Label>
                    <LinkSC to='/cadastrar'>Registrar</LinkSC>
                  </Form.Label>
                </Col>
              </Form>
              </Container>
        </BoxForm>
      </Row>
    </ContainerSC>
  );
}

export default SignIn;