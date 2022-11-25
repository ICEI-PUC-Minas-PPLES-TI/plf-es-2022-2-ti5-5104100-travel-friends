import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import BannerDefault from '../../assets/banner-default.svg';
import { Divider } from "../Divider/Divider.styled";
import { RoadMap } from "../../@types/models.interface";

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
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {data?.map((item, idx) => (
        <Col>
          <Card tabIndex={idx} className="h-100" bg="light">
            <Card.Img className="p-5" variant="top" src={BannerDefault} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              {item.isFree && <Card.Text>Gratuito</Card.Text>}
              <Card.Text>
              </Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Divider />
              <Card.Text>Horário: {item.start} até {item.end}</Card.Text>
              <Card.Text>{item.participants.length} de {item.person}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardBox;
