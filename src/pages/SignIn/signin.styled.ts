import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import { Theme } from "../../utils";

export const ContainerSC = styled(Container)`
  height: 100%;
  position: absolute;
`;

export const Title = styled.h1`
  color: white;
  font-size: ${Theme.fonts.extraTitle};
  text-align: center;
  font-weight: 700;
`;

export const LinkSC = styled(Link)`
  color: white;
`;

export const BoxForm = styled(Col)`
  background-color: ${Theme.colors.primary};
`;
