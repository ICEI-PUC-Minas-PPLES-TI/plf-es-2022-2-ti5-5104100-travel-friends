import React from "react";
import renderer from "react-test-renderer";

import Button from "../../components/Button";

describe("<Button />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Button title="test" />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Button title="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
