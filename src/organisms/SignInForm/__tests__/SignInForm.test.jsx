import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextField from '@material-ui/core/TextField';
import SignInForm from '../SignInForm';
import { ForgotPwdBtn, SigninBtn, SigininGoogleBtn, TextFieldPwd } from '../styles';

configure({ adapter: new Adapter() });

describe('<SignInForm />', () => {
  const getWrapper = () => shallow(<SignInForm />);

  it('renders without crashing', () => {
    const wrapper = getWrapper();
    expect(wrapper.find(TextField).length).toBe(1);
    expect(wrapper.find(TextFieldPwd).length).toBe(1);
    expect(wrapper.find(SigininGoogleBtn).length).toBe(1);
    expect(wrapper.find(SigninBtn).length).toBe(1);
    expect(wrapper.find(ForgotPwdBtn).length).toBe(1);
  });

  it('puts text input into state', () => {
    const wrapper = getWrapper();

    wrapper.find('#email').simulate('change', { target: { value: 'obi@master.jedi' } });
    wrapper.find('#password').simulate('change', { target: { value: 'highground' } });

    expect(wrapper.state().email).toBe('obi@master.jedi');
    expect(wrapper.state().password).toBe('highground');
  });
});
