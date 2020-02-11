import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Dropdown from '../Dropdown';

configure({ adapter: new Adapter() });

describe('<Dropdown />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.find(Autocomplete).length).toBe(1);
  });
});
