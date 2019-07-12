import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Button from '../Button.jsx';

jest.unmock('../Button.jsx');
describe('Button', () => {

  let buttonItem = null;

  const text = 'Test Label';

  beforeEach(function() {
    buttonItem = shallow(<Button text={text} />);
  });

  it('is defined', () => {
    expect(buttonItem).toBeDefined();
  });

  it('is a button element', () => {
    expect(buttonItem.type()).toEqual('button');
  });

  it('is has specified text', () => {
    expect(buttonItem.text()).toEqual(text);
  });

  it('is has a active class', () => {
    buttonItem = shallow(<Button text={text} status='active' />);
    expect(buttonItem.hasClass('usa-button--active')).toBe(true);
  });

  it('is has a hover class', () => {
    buttonItem = shallow(<Button text={text} status='hover' />);
    expect(buttonItem.hasClass('usa-button--hover')).toBe(true);
  });

  it('is has a disabled status', () => {
    buttonItem = shallow(<Button text={text} disabled={true} />);
    expect(buttonItem.hasClass('usa-button--disabled')).toBe(true);
    expect(buttonItem.prop('disabled')).toBeDefined();
  });

  it('is has a big class', () => {
    buttonItem = shallow(<Button text={text} size='big' />);
    expect(buttonItem.hasClass('usa-button--big')).toBe(true);
  });

  it('handles onClick', () => {
    var onClick = sinon.spy();
    buttonItem = shallow(<Button text={text} onClick={onClick} />);
    buttonItem.find('button').simulate('click');
    expect(onClick.called).toBeDefined();
  });
});
