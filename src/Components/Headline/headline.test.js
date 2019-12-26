import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  // With Props

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = { header: "Test Header", desc: "Test Description." };
      wrapper = setUp(props);
    });

    it("It should render without Errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render an H1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render an Desc", () => {
      const desc = findByTestAttr(wrapper, "description");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("No Errors with No Props", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
