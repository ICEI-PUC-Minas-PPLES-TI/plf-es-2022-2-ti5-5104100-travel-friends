import React from "react";
import renderer from "react-test-renderer";

import SignUp from "../../screens/auth/SignUp";

describe("<SignUp />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
