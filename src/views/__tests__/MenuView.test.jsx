import React from 'react';
import { Provider } from 'react-redux';
import notify from 'msg-notify';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import MenuView from '../MenuView';


const show = jest.fn();
notify.show = show;

describe('login view', () => {
    let wrapper;
    const mockStore = configureStore([thunk]);
    jest.mock('msg-notify');

    const expectedStore = {
        menuReducer: {},
    };

    const props = {
        history: {
            push: jest.fn(),
        },
        postDataThunkNoHeader: jest.fn(),
        signUpActionCreatorSuccess: jest.fn(),
        isSignUp: "",
    };

    const store = mockStore(expectedStore);

    beforeEach(() => {
        wrapper = mount(<Provider store={store}>
            <MenuView {...props} />
        </Provider>);
    });
    it('renders authentication view', () => {
        wrapper
    });
    it('new item posted', () => {
        const event = { preventDefault: jest.fn(), target: { foodItem: { value: 'food' }, description: { value: 'food' }, price: { value: 1234 } } };
        const spy = jest.spyOn(wrapper.instance().props.children.props, 'postDataThunkNoHeader');
        wrapper.find('form').simulate('submit', event);
        expect(spy).toBeTruthy();
    });
});
