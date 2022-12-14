import React, { useState } from "react";
import { Row, Col, Card, Container } from 'react-bootstrap';
import BannerDefault from '../../assets/icons/banner-default.svg';
import { Divider } from "../Divider/Divider.styled";
import { RoadMap } from "../../@types/models.interface";
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
import { deleteRoadmap, getAllRoadmap } from "src/services/api/Requests/roadmap";

interface Props {
    data?: RoadMap[];
    divider?: boolean;
    bg?: string;
    color?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const CardBox: React.FC<Props> = ({ 
    bg,
    color,
    children,
    data,
    divider,
    onClick,
  }) => { 
    const [message, setMessage] = useState('');
    const [roadmaps,setRoadmaps] = useState(data);

    const onDeleteRoadmap = async(id: any) => {
      const { data, status } = await deleteRoadmap(id);
      if(status === 200){
          const res = await getAllRoadmap();
          setRoadmaps(res);
          setMessage(data.message);
      }else{
          setMessage(data.message);
      }
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {roadmaps?.map((item, idx) => (
        <Col>
          <Card tabIndex={idx} className="h-100" style={{backgroundColor: 'fbfbfb'}}>
            <Container className='d-inline mt-2' style={{position: 'absolute', textAlign:'end' }}>
                <RiDeleteBin6Line onClick={() => onDeleteRoadmap(item._id)} style={{cursor: 'pointer'}} color="rgb(2 64 106)" size={20} />
             </Container>
            <Card.Img className="p-5" variant="top" src={BannerDefault} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              {item.isFree ? <Card.Text style={{color: 'green'}}>Gratuito</Card.Text> : <Card.Subtitle className="text-muted">R$ {item.price}</Card.Subtitle>}
              <Card.Text>
              </Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>
                <Divider />
              </Card.Text>
              <Row>
                <Col><p>Horário: </p></Col>
                <Col><p className="text-right">{item.start} até {item.end}</p></Col>
              </Row>
              <Row>
                <Col><p>Participantes:</p> </Col>
                <Col><p className="text-right">{item.participants.length}/{item.person}</p></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardBox;
