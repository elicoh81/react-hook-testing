import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import { act } from "react-dom/test-utils";
import MyReduxComponent from "../src/components/my-component/MyReduxComponent";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("MyReduxComponent", () => {
  const onCountChange = jest.fn(x => x);
  const mockStore = configureStore();
  let store = mockStore({ todos: ["first todo"] });

  let wrapper: Enzyme.ReactWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MyReduxComponent onCountChange={onCountChange} />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("works", () => {
    console.log(wrapper.debug());
    expect(wrapper).not.toBeNull();
  });

  it("snapshot test", () => {
    console.log(wrapper.debug());
    expect(wrapper).toMatchInlineSnapshot(`ReactWrapper {}`);
  });
});
