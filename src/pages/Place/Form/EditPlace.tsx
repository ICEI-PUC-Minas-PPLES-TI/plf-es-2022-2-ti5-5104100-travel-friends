import React, { useState } from 'react';
import { Navigation } from '../../../components';
import { Container, Row,Col, Form, Button } from 'react-bootstrap';
import { Local } from '../../../@types/models.interface';
import { SearchCEP } from '../../../utils/generalUtils';
import InputTime from '../../../components/InputTime/InputTime';
import { userHook } from '../../../context/userData';
import { updatePlace } from '../../../services/api/Requests/places';
import { useLocation, useNavigate } from 'react-router-dom';


const EditPlace = () => {
    const {state} = useLocation();
    const [values, setValues] = useState<Local>(state);
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState();
    const [endereco, setEndereco] = useState("");
    const [validated, setValidated] = useState(false);
    const { userData } = userHook();
    const navigate = useNavigate();
    
    const onSubmit = async(e:any) => {
        e.preventDefault();
        values.address = `${number}, ${endereco}`;
        values.idCreator = userData.id;
        setValues({...values});
        await updatePlace(values._id, values);
    }

    const handleAddress = async(value: any) => {
        const result = await SearchCEP(value);
        if(result !== undefined){
            setAddress(result?.data);
            let stringData = `${result?.data.logradouro}, ${result?.data.bairro}, ${result?.data.localidade} - ${result?.data.uf}`;
            setEndereco(stringData);
        }
    }
    
    return (
        <Navigation className="d-flex">
        <Container className='p-5 justify-content-center align-self-center'>
            <Form noValidate validated={validated} onSubmit={(e) => onSubmit(e)} className='pe-5 ps-5'>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Nome do local</Form.Label>
                        <Form.Control type="text" value={values.name} onChange={(e) => {
                            values.name = e.target.value;
                            setValues({...values});
                        }} placeholder="Insira o nome do local" required/>
                    </Form.Group>   
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type='tel' pattern="[0-9]{5}-[0-9]{2}" maxLength={8} value={values.cep} onChange={(e) => {
                            values.cep = e.target.value;
                            setValues({...values});
                        }} onBlur={(e) => handleAddress(e.target.value)} placeholder='Insira o CEP' required/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control value={endereco} onChange={(e) => setEndereco(e.target.value)} type="text" placeholder="Insira o logradouro"/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Número</Form.Label>
                        <Form.Control value={number} onChange={(e) => { setNumber(e.target.value) }} type='text' placeholder="1234" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Hora de abertura</Form.Label>
                        <InputTime
                            name="openTime"
                            value={values.openTime}
                            initTime='00:00'
                            mountFocus={false}
                            onTimeChange={(val) => {
                                values.openTime = val;
                                setValues({...values});
                            }}
                        />
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                        <Form.Label>Hora de fechamento</Form.Label>
                        <InputTime
                            name="closeTime"
                            value={values.closeTime}
                            initTime='00:00'
                            mountFocus={false}
                            onTimeChange={(val) => {
                                values.closeTime = val;
                                setValues({...values});
                            }}
                        />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control value={values.location.lat} onChange={(e) => { 
                        values.location.lat = Number(e.target.value);
                        setValues({...values})}} maxLength={11} type='tel' placeholder="-xx.xxxxxxx" required/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control value={values.location.lng}  onChange={(e) => { 
                            values.location.lng = Number(e.target.value);
                            setValues({...values}) }} maxLength={11} type='text' placeholder="-xx.xxxxxxx" required/>
                    </Form.Group>        
                </Row>
                <Row>
                    <Col md={4}>
                <Button variant="light" type="reset" onClick={() => navigate('/locais')}>
                    Cancelar
                </Button>
                    </Col>
                    <Col md={4}>
                <Button variant="success" type="submit">
                    Salvar
                </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
      </Navigation>      
    );
}

export default EditPlace;
