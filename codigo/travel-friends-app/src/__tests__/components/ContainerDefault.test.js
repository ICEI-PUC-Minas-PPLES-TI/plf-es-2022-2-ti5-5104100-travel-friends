import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";

import ContainerDefault from "../../components/ContainerDefault";

describe("<ContainerDefault />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(<ContainerDefault children={<View></View>} />)
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(<ContainerDefault children={<View></View>} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
