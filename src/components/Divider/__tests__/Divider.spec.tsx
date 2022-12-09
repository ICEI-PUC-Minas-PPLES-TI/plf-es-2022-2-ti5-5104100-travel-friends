// import {}
import React from "react";
import { Divider } from "../Divider.styled";
import { waitFor } from "../../../utils/test-utils";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('Teste componente Divider', () => {

  it('deve renderizar', () => {
    render(<Divider />)

    waitFor(() => {
      expect(screen).toBeInTheDocument();
    })
  })
})