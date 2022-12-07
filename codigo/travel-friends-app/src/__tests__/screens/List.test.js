import React from "react";
import renderer from "react-test-renderer";

import { List } from "../../screens/app/List";

describe("<List />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<List />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<List />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
