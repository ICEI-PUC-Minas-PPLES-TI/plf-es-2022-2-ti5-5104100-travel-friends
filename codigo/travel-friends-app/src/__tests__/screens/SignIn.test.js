import React from "react";
import renderer from "react-test-renderer";

import SignIn from "../../screens/auth/SignIn";

describe("<SignIn />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<SignIn />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<SignIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
