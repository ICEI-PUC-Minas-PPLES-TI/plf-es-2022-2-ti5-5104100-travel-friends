import { useState } from 'react';
import { Divider, Navigation } from '../../components';
import { Container, Row,Col, Card, Toast, ToastContainer } from 'react-bootstrap';
import { Local } from '../../@types/models.interface';
import { deletePlace, getAllPlaces } from '../../services/api/Requests/places';
import { useEffect } from 'react';
import BannerPlaces from '../../assets/icons/local.png';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import React from 'react';
import { userHook } from 'src/context/userData';
import { useNavigate } from 'react-router-dom';


const Place = () => {
    const [show, setShow] = useState(false);
    const [placeEdit, setPlaceEdit] = useState<Local>({} as Local);
    const [message, setMessage] = useState('');
    const [places, setPlaces] = useState<Local[]>();
    const navigate = useNavigate();

    const { userData } = userHook();

    useEffect(() => {
        async function loadPlaces () {
            const { data } = await getAllPlaces();
            setPlaces(data);
            return data;
        }
        loadPlaces();
      }, [placeEdit]);
        
        const onDeletePlace = async(id: any) => {
            const { data, status } = await deletePlace(id);
            if(status === 200){
                setMessage(data.message);
                setShow(true);
                
            const response = await getAllPlaces();
            setPlaces(response.data);
            }else{
                setMessage(data.message);
            }
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
            <ToastContainer className="p-3" position='top-end'>
                <ToastMessage />
            </ToastContainer>
            <Container className='p-5'>
            <Row xs={1} md={2} lg={3} className="g-4">
                {places?.filter((item) => item.idCreator === userData.id).map((item, idx) => (
                    <Col>
                    <Card tabIndex={idx} className="h-100" bg="light">
                        <Container className='d-inline mt-2' style={{position: 'absolute', textAlign:'end' }}>
                            <RiDeleteBin6Line onClick={() => onDeletePlace(item._id)} style={{cursor: 'pointer'}} color="rgb(2 64 106)" size={20} />
                            <FiEdit3 style={{cursor: 'pointer'}} onClick={() => navigate('/local/editar', { state: item })} className='ms-2'color='rgb(2 64 106)'size={20}/>
                        </Container>
                        <Card.Img className='ps-3 pe-3 pt-3 w-50 align-self-center' variant="top" src={BannerPlaces} />
                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.address}</Card.Text>
                        <Card.Text>
                            <Divider color="#02406a" />
                        </Card.Text>
                        <Card.Text className='small'><strong>Funcionamento:</strong> {item.openTime} às {item.closeTime}</Card.Text>
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
