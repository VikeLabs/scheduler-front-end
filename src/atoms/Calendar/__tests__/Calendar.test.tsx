import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FullCalendar from '@fullcalendar/react';
import Calendar from '../Calendar';

configure({ adapter: new Adapter() });

describe('<Calendar />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper.find(FullCalendar).length).toBe(1);
  });
});
