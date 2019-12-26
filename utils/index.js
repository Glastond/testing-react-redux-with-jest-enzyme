import checkPropTypes from "check-prop-types";

export const findByTestAttr = (component, atr) => {
  let wrapper = component.find(`[data-test='${atr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.PropTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
