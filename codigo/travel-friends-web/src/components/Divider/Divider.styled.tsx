import styled from 'styled-components';

interface DividerProps {
  pad?: string | number;
}

export const Divider = styled.div<DividerProps>`
  width: 100%;
  background-color: lightgray;
  padding: ${(props) => props.pad || '1px 5px'};
`;
