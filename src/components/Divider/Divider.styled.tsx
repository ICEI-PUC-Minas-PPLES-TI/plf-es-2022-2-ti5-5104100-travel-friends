import styled from 'styled-components';

interface DividerProps {
  pad?: string | number;
  color?: string;
}

export const Divider = styled.div<DividerProps>`
  width: 100%;
  background-color: ${(props) => props.color || 'lightgray'};
  padding: ${(props) => props.pad || '1px 5px'};
`;
