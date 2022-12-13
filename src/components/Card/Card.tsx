import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import BannerDefault from '../../assets/icons/banner-default.svg';
import { Divider } from "../Divider/Divider.styled";
import { RoadMap } from "../../@types/models.interface";
import Button from "../Button/Button";
import { Theme } from '../../utils';
import { userHook } from "src/context/userData";

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
    const { userData } = userHook();

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {data?.map((item, idx) => (
        <Col>
          <Card tabIndex={idx} className="h-100" style={{backgroundColor: 'fbfbfb'}} >
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
            <Card.Footer>
              <Button
                type='submit'
                bg={(item.idCreator !== userData.id) ? Theme.colors.primary : 'lightgray'}
                color="white"
                disabled={item.idCreator === userData.id}
              >Inscrever</Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardBox;
