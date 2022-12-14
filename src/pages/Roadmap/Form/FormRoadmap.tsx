import React, { useEffect, useState } from 'react';
import { Navigation } from '../../../components';
import { Container, Row,Col, Form, Button, FormGroup } from 'react-bootstrap';
import { Local, RoadMap, TRoadmaps } from '../../../@types/models.interface';
import InputTime from '../../../components/InputTime/InputTime';
import { getAllPlaces } from '../../../services/api/Requests/places';
import { userHook } from '../../../context/userData';
import { createRoadmap } from '../../../services/api/Requests/roadmap';

const FormRoadmap = () => {
    const [values, setValues] = useState<RoadMap>({} as RoadMap);
    const [validated, setValidated] = useState(false);
    const [places, setPlaces] = useState<Local[]>([]);

    const TypeR: TRoadmaps = {
        restaurante: 'restaurante',
        loja: 'loja',
        museu: 'museu',
        igreja: 'igreja',
        praca: 'praca',
        parque: 'parque',
        shopping: 'shopping',
        arLivre: 'arLivre',
        educacao: 'educacao'
    }

    useEffect(() => {
        async function loadPlaces () {
            const resposta = await getAllPlaces();;
            setPlaces(resposta.data);
            return resposta.data;
        }
        loadPlaces();
      }, []);
    
      const { userData } = userHook();
  
    const onSubmit = async(e:any) => {
        e.preventDefault();   
        values.idCreator = userData.id;
        values.favorites = false;
        values.participants = [];
        setValues({...values});
        await createRoadmap(values);
    }

    return (
      <Navigation className="d-flex">
        <Container className='p-5 justify-content-center align-self-center'>
            <Row>
                <Col lg={8}>
                <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Nome do Passeio</Form.Label>
                            <Form.Control type="text" value={values.title} onChange={(e) => {values.title = e.target.value;
                                setValues({...values});}} placeholder="Insira o nome do passeio" required/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Tipo do passeio</Form.Label>
                            <Form.Select defaultValue="0" value={values.type} onChange={(e) => {
                                values.type = e.target.value;
                                setValues({...values});}} required>
                                <option value="0">Escolha...</option>
                                <option value={TypeR.restaurante}>Restaurante</option>
                                <option value={TypeR.loja}>Loja</option>
                                <option value={TypeR.museu}>Museu</option>
                                <option value={TypeR.igreja}>Igreja</option>
                                <option value={TypeR.parque}>Parque</option>
                                <option value={TypeR.arLivre}>Ar Livre</option>
                                <option value={TypeR.educacao}>Educação</option>
                                <option value={TypeR.shopping}>Shopping</option>
                            </Form.Select>
                        </Form.Group>
                         
                    </Row>
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows={3} value={values.description} onChange={(e) => {
                                values.description = e.target.value;
                                setValues({...values});
                            }} type="text" placeholder="Faça um breve resumo do passeio ..."/>
                        </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} md={4}>
                            <Form.Label>Quantidade de participantes</Form.Label>
                            <Form.Control type='number' value={values.person} onChange={(e) => {
                                values.person = Number(e.target.value);
                                setValues({...values});
                            }} placeholder='Exemplo: 10' required/>
                        </Form.Group>

                        <Form.Group as={Col} md={3} className='align-self-center'>
                            <Form.Check 
                                type="switch"
                                className='text-success'
                                checked={values.isFree}
                                id="custom-switch"
                                label="Gratuito"
                                onChange={(e) => {
                                    values.isFree = e.target.checked;
                                    setValues({...values});
                                }}
                            />
                        </Form.Group>
                        {!values.isFree && <Form.Group as={Col}>
                            <Form.Label>Preço</Form.Label>
                            <Form.Control value={values.price} onChange={(e) => {
                                values.price = Number(e.target.value);
                                setValues({...values});
                            }} type='text' placeholder="R$ 00,00" />
                        </Form.Group>}
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col}>
                            <Form.Label>Hora de abertura</Form.Label>
                            <InputTime
                                        name="time"
                                        value={values.start}
                                        initTime='00:00'
                                        onTimeChange={(val) => {
                                            values.start = val;
                                            setValues({ ...values });
                                        } } 
                           />
                        </Form.Group>
                        
                        <Form.Group as={Col}>
                            <Form.Label>Hora de fechamento</Form.Label>
                            <InputTime
                                name="time"
                                value={values.end}
                                initTime='00:00'
                                onTimeChange={(val) => {
                                    values.end = val;
                                    setValues({...values});
                                }} 
                            />
                        </Form.Group>
                    </Row>
                    {places && <FormGroup className='mb-3'>
                        <Form.Label>Ponto de encontro</Form.Label>
                        <Form.Select value={values.idLocal} onChange={(e) => {
                                values.idLocal = e.target.value;
                                setValues({...values});}}>
                            {places?.map((item: Local) => { 
                                return(
                                    <option value={item._id}>{item.name} - {item.address}</option>
                                );}
                            )}
                        </Form.Select>
                    </FormGroup>}
                    <Button variant="success" type="submit">
                        Cadastrar Passeio
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
      </Navigation>
    );
}

export default FormRoadmap;
