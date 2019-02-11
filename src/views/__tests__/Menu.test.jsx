import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import MenuCard from '../../menuItems/menuCard'
import Menu from '../Menu';

const mockStore = configureStore([thunk]);
const expectedStore = {
  menuReducer: {
    menu: [{}, {}],
  },
};
const store = mockStore(expectedStore);

const props = {
  getPrivateDataThunk: jest.fn(),
};

const menuProps = {
  foodItem: "food",
  description: 'food',
  price: 6763,
};

describe('menu card ', () => {
  it('menu card should render ', () => {
    const wrapper = mount(<MenuCard />);
    expect(wrapper.contains(<div className="card-body " />))
  });
});

describe('menu card ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Menu {...props} />
        </ Provider>
      </MemoryRouter>

    );
  });

  it('menu card should render ', () => {
    wrapper

  });


});