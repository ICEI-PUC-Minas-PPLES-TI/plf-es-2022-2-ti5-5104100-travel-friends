// import {}
import React from "react";
import Button from "../Button";
import { waitFor } from "../../../utils/test-utils";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Teste componente button', () => {

  it('deve renderizar', () => {
    render(<Button bg='red' type= "button" color='white'>Clicar</Button>)

    waitFor(() => {
      expect(screen.findByText('Clicar')).toBeInTheDocument();
    })
  })
})