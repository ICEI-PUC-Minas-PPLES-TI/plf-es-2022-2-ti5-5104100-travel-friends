import React from "react";
import renderer from "react-test-renderer";

import ForgotPassword from "../../screens/auth/ForgotPassword";

describe("<ForgotPassword />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<ForgotPassword />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<ForgotPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
