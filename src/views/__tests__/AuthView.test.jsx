import React from 'react';
import { Provider } from 'react-redux';
import notify from 'msg-notify';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import AuthView from '../AuthView';


const show = jest.fn();
notify.show = show;

describe('auth view', () => {
    let wrapper;
    const mockStore = configureStore([thunk]);
    jest.mock('msg-notify');

    const expectedStore = {
        authReducer: {
            signUpSuccess: {},
        },
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
            <AuthView {...props} />
        </Provider>);
    });
    it('renders authentication view', () => {
        wrapper
    });
    it('new user registered', () => {
        const event = { preventDefault: jest.fn(), target: { username: { value: 'john doe' }, email: { value: 'm@gmail.com' }, password: { value: '12345' }, confirmPassword: { value: '12345' } } };
        const spy = jest.spyOn(wrapper.instance().props.children.props, 'postDataThunkNoHeader');
        wrapper.find('form').simulate('submit', event);
        expect(spy).toBeTruthy();
    });
    it('test change to login form', () => {
        wrapper.find('#login').simulate('click');
        expect(props.history.push).toHaveBeenCalled();
      });
});
