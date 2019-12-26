import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "../../../utils";

const setUp = (props = {}) => {
  let component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("It should pass without error", () => {
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render logoImg", () => {
    const logo = findByTestAttr(component, "LogoImg");
    expect(logo.length).toBe(1);
  });
});
