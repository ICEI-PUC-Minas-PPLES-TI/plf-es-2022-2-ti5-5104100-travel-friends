import React from "react";
import renderer from "react-test-renderer";

const item = {
  id: "1",
  type: "festa",
  title: "test festa",
  description: "test festa",
  date: "",
};
import CardNotification from "../../components/CardNotification";

describe("<CardInfo />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<CardNotification item={item} />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<CardNotification item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
