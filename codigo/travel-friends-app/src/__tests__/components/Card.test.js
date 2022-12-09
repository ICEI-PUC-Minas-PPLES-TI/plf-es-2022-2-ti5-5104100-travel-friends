import React from "react";
import renderer from "react-test-renderer";

const item = {
  _id: "1",
  idCreator: "1",
  idLocal: "1",
  title: "test",
  description: "descrição de test",
  favorites: false,
  isFree: true,
  price: 0,
  type: "igreja",
  person: 5,
  start: "10:00",
  end: "20:00",
  participants: [
    {
      idUser: "1",
      _id: "1",
    },
  ],
};

import Card from "../../components/Card";

describe("<Card />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Card item={item} />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<Card item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
