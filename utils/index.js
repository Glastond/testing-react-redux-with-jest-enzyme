export const findByTestAttr = (component, atr) => {
  let wrapper = component.find(`[data-test='${atr}']`);
  return wrapper;
};
