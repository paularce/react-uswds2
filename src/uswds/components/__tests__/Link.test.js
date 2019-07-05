import React from 'react';
import { shallow } from 'enzyme';
import Link from '../Link.jsx';

jest.unmock('../Link.jsx');

describe('Link', () => {
  it('should render correctly', () => {
    const dest = '/testURL';
    const component = shallow(
    <Link to={dest}>This is a link</Link>
    );
    expect(component).toMatchSnapshot();
  });
});

