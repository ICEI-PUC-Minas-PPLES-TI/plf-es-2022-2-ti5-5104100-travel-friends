import React from "react";
import renderer from "react-test-renderer";

import Notifications from "../../screens/app/Notifications";

describe("<Notifications />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Notifications />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Notifications />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
