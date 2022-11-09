import { useState } from 'react';
import { Container, Row, Col,Form, Figure } from 'react-bootstrap';
import { ContainerSC, BoxForm, Title } from './resetPassword.styled';
import { loginUser } from '../../services/api/Requests/login';
import { Button } from '../../components';
import planet from '../../assets/icon-planet.svg';
import logo from '../../assets/logo-app.png';
import { Theme } from '../../utils';

const ResetPassword = () => {
  const [validated, setValidated] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    const data = await loginUser(values);
    console.log(data);
    setValidated(true);
  };

  const checkPassword = () => {
    if(values.password === newPassword){
      return true;
    }
    return false;
  }

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
              <Col className='text-center'>
                <img src={logo} width="142" alt="Logo" />
                <Title>Recuperar conta</Title>
              </Col>
              <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)} className="m-5">
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Email</Form.Label>
                  <Form.Control type="email" name="email" value={values.email} onChange={(e) => {
                    values.email = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira seu email" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='text-white'>Nova senha</Form.Label>
                  <Form.Control type="password" name="password" value={values.password} onChange={(e) => {
                    values.password = e.target.value;
                    setValues({...values});
                  }} placeholder="Insira a nova senha" required/>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className='text-white'>Repetir senha</Form.Label>
                  <Form.Control type="password" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} onBlur={checkPassword} placeholder="Repita a senha" required/>
                </Form.Group>
                <Button
                  type='submit'
                  bg={Theme.colors.yellow}
                  color="white"
                  children = "Recuperar"/>
              </Form>
              </Container>
        </BoxForm>
      </Row>
    </ContainerSC>
  );
}

export default ResetPassword;