import React from 'react';
import { shallow } from 'enzyme';
import SearchField from '../SearchField.jsx';

jest.unmock('../SearchField.jsx');

describe('SearchField', () => {
  it('should render correctly', () => {
    const component = shallow(
      <SearchField id="testId" />
    );
    expect(component).toMatchSnapshot();
  });

  it('is has a big variant', () => {
    let searchField = shallow(<SearchField id="testId" size="big" />);
    expect(searchField.hasClass('usa-search--big')).toBe(true);
  });

  it('is has a small variant', () => {
    let searchField = shallow(<SearchField id="testId" size="small" />);
    expect(searchField.hasClass('usa-search--small')).toBe(true);
  });

});