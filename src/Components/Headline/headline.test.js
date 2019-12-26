import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr, checkProps } from "../../../utils";
import checkPropTypes from "check-prop-types";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  // Testing PropTypes with check-prop-types

  describe("Checking Our prop Types", () => {
    it("should not through a Warning", () => {
      const expectProps = {
        header: "Test Header",
        desc: "Test Description",
        tempArr: [
          {
            fName: "test fName",
            lName: "test lName",
            age: 22,
            loggedIn: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectProps);
      expect(propsErr).toBeUndefined();
    });
  });

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
