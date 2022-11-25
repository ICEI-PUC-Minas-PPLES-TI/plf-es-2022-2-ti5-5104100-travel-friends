import { useState } from 'react';
import { Divider, Navigation } from '../../components';
import { Container, Row,Col, Form, Button, Card, Toast, ToastContainer, Modal } from 'react-bootstrap';
import { Local } from '../../@types/models.interface';
import InputTime from '../../components/InputTime/InputTime';
import { deletePlace, getAllPlaces, getPlace } from '../../services/api/Requests/places';
import { useEffect } from 'react';
import astronaut from '../../assets/images/astronaut.jpg';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import BannerPlaces from '../../assets/banner-places.svg';


const Place = () => {

    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [placeEdit, setPlaceEdit] = useState<Local>({} as Local);
    const [message, setMessage] = useState('');
    const [places, setPlaces] = useState<Local[]>();

    useEffect(() => {
        async function loadPlaces () {
            const resposta = await getAllPlaces();
            setPlaces(resposta);
            return resposta;
        }
        loadPlaces();
      }, []);
      
      
    const onEditPlace = async(id: any) => {
        const item = await getPlace(id);
        setPlaceEdit(item);
        setShowModal(true);   
    }
        
        const onDeletePlace = async(id: any) => {
            const { data, status } = await deletePlace(id);
            if(status === 200){
                setPlaces(data);
                setMessage(data.message);
                setShow(true);
                const newData = places?.filter((item) => item._id !== id);
                setPlaces(newData);
            }else{
                setMessage(data.message);
            }
        }
    
    const onUpdatePlace = (e: any) => {
        e.preventDefault();
        console.log(placeEdit);
    }

    const ModalEdit = () => {
        return(
            <Modal show={showModal}
                onHide={() => setShowModal(false)}
                backdrop="static"
                size='lg'
                keyboard={false}
                >
                <Modal.Header closeButton>
                <Modal.Title>Editar: {placeEdit.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form className='pe-5 ps-5'>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Nome do local</Form.Label>
                        <Form.Control type="text" value={placeEdit.name} onChange={e => {
                            placeEdit.name = e.target.value;
                            setPlaceEdit({...placeEdit});
                        }} placeholder="Insira o nome do local" required/>
                    </Form.Group>   
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type='tel' pattern="[0-9]{5}-[0-9]{2}" maxLength={8} value={placeEdit.cep} onChange={(e) => {
                            placeEdit.cep = e.target.value;
                            setPlaceEdit({...placeEdit});
                        }} placeholder='Insira o CEP' required/>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control value={placeEdit.address} onChange={(e) => {
                            placeEdit.address = e.target.value;
                            setPlaceEdit({...placeEdit});}} type="text" placeholder="Insira o logradouro"/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Hora de abertura</Form.Label>
                        <InputTime
                            name="openTime"
                            value={placeEdit.openTime}
                            initTime='00:00'
                            mountFocus={false}
                            onTimeChange={(val) => {
                                placeEdit.openTime = val;
                                setPlaceEdit({...placeEdit});
                            }}
                        />
                    </Form.Group>
                    
                    <Form.Group as={Col}>
                        <Form.Label>Hora de fechamento</Form.Label>
                        <InputTime
                            name="closeTime"
                            value={placeEdit.closeTime}
                            initTime='00:00'
                            mountFocus={false}
                            onTimeChange={(val) => {
                                placeEdit.closeTime = val;
                                setPlaceEdit({...placeEdit});
                            }}
                        />
                    </Form.Group>
                </Row>
            </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={e => onUpdatePlace(e)}>Salvar</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const ToastMessage = () => {
        return(
            <Toast bg="warning" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">Notificação</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body className='text-white'>{message}</Toast.Body>
            </Toast>
        );
    }
    
    return (
          <Navigation>
            <ModalEdit />
            <ToastContainer className="p-3" position='top-end'>
                <ToastMessage />
            </ToastContainer>
            <Container className='p-5'>
            <Row xs={1} md={2} lg={3} className="g-4">
                {places?.map((item: any, idx: any) => (
                    <Col>
                    <Card tabIndex={idx} className="h-100" bg="light">
                        <Container className='d-inline mt-2' style={{position: 'absolute', textAlign:'end' }}>
                            <RiDeleteBin6Line onClick={() => onDeletePlace(item._id)} style={{cursor: 'pointer'}} color="#6C63FF" size={20} />
                            <FiEdit3 style={{cursor: 'pointer'}} onClick={() => onEditPlace(item._id)} className='ms-2'color='#6C63FF'size={20}/>
                        </Container>
                        <Card.Img className='ps-3 pe-3 pt-3' variant="top" src={BannerPlaces} />
                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.address}</Card.Text>
                        {item.isFree && <Card.Text>Gratuito</Card.Text>}
                        <Card.Text>
                            <Divider />
                        </Card.Text>
                        <Card.Text className='small'>Funcionamento: {item.openTime} às {item.closeTime}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
                </Row>
            </Container>
          </Navigation>
    );

};

export default Place;
