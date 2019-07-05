import React from 'react';
import { shallow } from 'enzyme';
import OfficialSiteBanner from '../OfficialSiteBanner.jsx';

jest.unmock('../OfficialSiteBanner.jsx');

describe('Tag', () => {
  it('should render correctly', () => {
    const component = shallow(<OfficialSiteBanner />);
    expect(component).toMatchSnapshot();
  });
});