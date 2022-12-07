import React from "react";
import renderer from "react-test-renderer";

import Input from "../../components/Input";

describe("<Input />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(<Input text={""} onChangeText={""} value={""} />)
      .toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(<Input text={""} onChangeText={""} value={""} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
