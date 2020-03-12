import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Auth } from 'aws-amplify';
import SignUpForm from '../SignUpForm';
import { SigninBtn, SignupBtn, SiginupGoogleBtn, StyledTextField } from '../styles';

configure({ adapter: new Adapter() });

jest.mock('aws-amplify');
const signUp = jest.fn();

describe('<SignUpForm />', () => {
  const getWrapper = () => shallow(<SignUpForm />);

  beforeEach(() => {
    Auth.signUp = signUp.bind(Auth);
    signUp.mockImplementation(() => Promise.resolve({}));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const wrapper = getWrapper();
    expect(wrapper.find(StyledTextField).length).toBe(5);
    expect(wrapper.find(SigninBtn).length).toBe(1);
    expect(wrapper.find(SignupBtn).length).toBe(1);
    expect(wrapper.find(SiginupGoogleBtn).length).toBe(1);
  });

  it('puts text input into state', () => {
    const wrapper = getWrapper();

    wrapper.find('#firstName').simulate('change', { target: { value: 'ben' } });
    wrapper.find('#lastName').simulate('change', { target: { value: 'kenobi' } });
    wrapper.find('#email').simulate('change', { target: { value: 'obi@master.jedi' } });
    wrapper.find('#password').simulate('change', { target: { value: 'highground' } });
    wrapper
      .find('#confirm-password')
      .simulate('change', { target: { value: 'highground' } });

    expect(wrapper.state().firstName).toBe('ben');
    expect(wrapper.state().lastName).toBe('kenobi');
    expect(wrapper.state().email).toBe('obi@master.jedi');
    expect(wrapper.state().pw1).toBe('highground');
    expect(wrapper.state().pw2).toBe('highground');
  });

  it('handles input validation error', async () => {
    const wrapper = getWrapper();
    const instance = wrapper.instance();

    wrapper.find('#email').simulate('change', { target: { value: 'notanemail' } });
    await instance.validateEmail(); // Call manually because async onBlur is hard
    expect(wrapper.state().error.email).toBe('This must be a valid email');

    wrapper.find('#password').simulate('change', { target: { value: '66' } });
    wrapper.find('#confirm-password').simulate('change', { target: { value: '501st' } });
    await instance.validatePasswords();
    expect(wrapper.state().error.pw1).toBe('Password must be at least 8 charaters long');
    expect(wrapper.state().error.pw2).toBe('Passwords must match');
  });

  it('handles submitting the form', () => {
    const wrapper = getWrapper();
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleSubmit');

    const firstName = 'ben';
    const lastName = 'kenobi';
    const email = 'obi@master.jedi';
    const password = 'highground';

    // fill out the form
    wrapper.find('#firstName').simulate('change', { target: { value: firstName } });
    wrapper.find('#lastName').simulate('change', { target: { value: lastName } });
    wrapper.find('#email').simulate('change', { target: { value: email } });
    wrapper.find('#password').simulate('change', { target: { value: password } });
    wrapper.find('#confirm-password').simulate('change', { target: { value: password } });

    // submit
    const event = { preventDefault: jest.fn() };
    wrapper.find('form').simulate('submit', event);
    expect(spy).toBeCalled();
    expect(signUp).toHaveBeenNthCalledWith(1, {
      username: email,
      password,
      attributes: { email, given_name: firstName, family_name: lastName },
    });
  });
});
