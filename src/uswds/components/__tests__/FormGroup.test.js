import React from 'react';
import { mount } from 'enzyme';
import FormGroup from '../FormGroup.jsx';
import TextInput from '../TextInput.jsx';

jest.unmock('../TextInput.jsx');
jest.unmock('../FormGroup.jsx');

describe('FormGroup', () => {
  it('should render correctly', () => {
    let component = null;
    const label = 'label goes here';
    const testId = 'myId';

    component = mount(
    <FormGroup>
      <TextInput id={testId} label={label} />
    </FormGroup>);
    expect(component).toMatchSnapshot();
  });
});