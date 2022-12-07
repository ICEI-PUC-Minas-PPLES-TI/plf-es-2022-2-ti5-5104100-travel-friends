import React from "react";
import renderer from "react-test-renderer";

import Text from "../../components/Text";

describe("<Text />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Text size={12} text={"olá"} />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
