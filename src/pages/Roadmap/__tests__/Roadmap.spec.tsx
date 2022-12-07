import { render, screen } from "@testing-library/react";
import React from "react";
import Roadmap from "..";

describe('', () => {

    it('text', () => {
      render(<Roadmap />);
      const test = screen.getAllByText('nome');

      expect(test).toBeInTheDocument();
    })
});