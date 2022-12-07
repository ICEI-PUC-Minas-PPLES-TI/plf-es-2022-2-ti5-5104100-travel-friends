import React from "react";
import renderer from "react-test-renderer";

import Terms from "../../screens/auth/Terms";

describe("<Terms />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Terms />).toJSON();
    expect(tree.children.length).toBe(3);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Terms />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
