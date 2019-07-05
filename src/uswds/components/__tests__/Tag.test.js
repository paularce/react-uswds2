import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../Tag.jsx';

jest.unmock('../Tag.jsx');

describe('Tag', () => {
  it('should render correctly', () => {
    const component = shallow(<Tag>TestText</Tag>);
    expect(component).toMatchSnapshot();
  });
});