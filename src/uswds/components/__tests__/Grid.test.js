import React from 'react';
import { mount, shallow } from 'enzyme';
import { Grid, Col } from '../Grid.jsx';

jest.unmock('../Grid.jsx');

describe('Grid', () => {

  let wrapper = null;

  it('is defined', () => {
    wrapper = mount(
      <Grid>
        <Col classes='grid-col-6'></Col>
        <Col classes='grid-col-6'></Col>
      </Grid>
    );
    expect(wrapper).toBeDefined();
  });

  it('defaults to using .grid-container class', () => {
    wrapper = shallow(
      <Grid>
        <Col classes='grid-col-6'></Col>
        <Col classes='grid-col-6'></Col>
      </Grid>
    );
    expect(wrapper.hasClass('grid-container')).toBe(true);
  });
  
  it('has full implemented as absence of .grid-container', () => {
    wrapper = shallow(
      <Grid full>
        <Col classes='grid-col-6'></Col>
        <Col classes='grid-col-6'></Col>
      </Grid>
    );
    expect(wrapper.hasClass('grid-container')).toBe(false);
  });
});
