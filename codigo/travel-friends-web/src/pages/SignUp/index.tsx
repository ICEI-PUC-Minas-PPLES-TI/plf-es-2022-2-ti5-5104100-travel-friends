import { useState } from 'react';
import { Container, Row, Col,Form, Figure, Alert } from 'react-bootstrap';
import { ContainerSC, BoxForm, Title } from './signUp.styled';
import { registerUser } from '../../services/api/Requests/login';
import { Button } from '../../components';
import planet from '../../assets/icon-planet.svg';
import logo from '../../assets/logo-app.png';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../utils';
import { UserRegister } from '../../@types/models.interface';

const SignUp = () => {
  const [messageSuccess, setMessageSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState<UserRegister>({} as UserRegister);

  const navigate = useNavigate();

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    const { data, status } = await registerUser(values);
    if(status === 201){
      setMessageSuccess(data.message);
      setTimeout(() => {
        navigate('/entrar');
      }, 3000);
    }
    else{
      setMessage(data.error);
    };
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
                <Title>Registrar-se</Title>
              </Col>
              <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)} className="ms-5 me-5">
              {message && <Alert variant='danger'>{message}</Alert>}
              {messageSuccess && <Alert variant='success'>{messageSuccess} Você será redirecionado.</Alert>}
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Nome</Form.Label>
                  <Form.Control type="text" name="name" value={values.name} onChange={(e) => {
                    values.name = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira seu nome" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Email</Form.Label>
                  <Form.Control type="email" name="email" value={values.email} onChange={(e) => {
                    values.email = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira seu email" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>CPF</Form.Label>
                  <Form.Control type="text" name="cpf" value={values.cpf} onChange={(e) => {
                    values.cpf = e.target.value;
                    setValues({...values});
                  }} placeholder="xxx.xxx.xxx-xx" maxLength={11} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Senha</Form.Label>
                  <Form.Control type="password" name="password" value={values.password} onChange={(e) => {
                    values.password = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira uma senha" required/>
                </Form.Group>
                <Form.Group className="mb-3 d-flex" style={{gap: 5}}>
                <Form.Check type="checkbox" />
                <p className='text-white'>Ao criar uma conta, tem de concordar com os <a href='#'>Termos e Condições</a>.</p>
                </Form.Group>
                <Button
                  type='submit'
                  bg={Theme.colors.yellow}
                  color="white"
                  children = "Cadastrar"/>
              </Form>
              </Container>
        </BoxForm>
      </Row>
    </ContainerSC>
  );
}

export default SignUp;