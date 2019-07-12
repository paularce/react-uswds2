import React from 'react';
import {shallow} from 'enzyme';
import Label from '../Label.jsx';

jest.unmock('../Label.jsx');

describe('Label', () => {

  let wrapper = null;

  const text = 'Test';

  beforeEach(function() {
    wrapper = shallow(<Label>{text}</Label>);
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders without throwing an error', () => {
    expect(wrapper.contains(<span className='usa-label'>{text}</span>)).toBe(true);
  });

  it('is a span element', () => {
    expect(wrapper.type()).toEqual('span');
  });

  it('has specified text', () => {
    expect(wrapper.text()).toEqual(text);
  });

  it('has the correct class', () => {
    expect(wrapper.hasClass('usa-label')).toBe(true);
  });

  it('has the correct class when modifier=\'big\'', () => {
    wrapper = shallow(<Label modifier='big'>{text}</Label>);
    expect(wrapper.hasClass('usa-label--big')).toBe(true);
  });

  it('has the correct class when modifier=\'small\'', () => {
    wrapper = shallow(<Label modifier='small'>{text}</Label>);
    expect(wrapper.hasClass('usa-label--small')).toBe(true);
  });

  it('has the correct class when modifier=\'required\'', () => {
    wrapper = shallow(<Label modifier='required'>{text}</Label>);
    expect(wrapper.hasClass('usa-label--required')).toBe(true);
  });

  it('has the correct class when modifier=\'error\'', () => {
    wrapper = shallow(<Label modifier='error'>{text}</Label>);
    expect(wrapper.hasClass('usa-label--error')).toBe(true);
  });
});
