import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Header from "./header.component";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Header Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Header />
        </Provider>
      )
    ).toMatchSnapshot();
  });
});

// describe("if current is null", () => {
//   it("should render sign in link", () => {
//     const mockProps = {
//       currentUser: null,
//     };

//     const newWrapper = shallow(
//       <Provider store={store}>
//         <Header {...mockProps} />
//       </Provider>
//     );

//     expect(newWrapper.find("[id='test']").text()).toBe("SIGN IN");
//   });
// });
