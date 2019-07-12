import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form.jsx';
import Fieldset from '../Fieldset.jsx';
import TextInput from '../TextInput.jsx';

jest.unmock('../Form.jsx');
jest.unmock('../Fieldset.jsx');
jest.unmock('../TextInput.jsx');

describe('Form', () => {
  it('should render correctly', () => {
    const component = shallow(
    <Form>
      <Fieldset legend='Name'>
      <TextInput id='last-name' label='Last name' />
      </Fieldset>
    </Form>
    );
    expect(component).toMatchSnapshot();
  });
});