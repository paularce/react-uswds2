import React from 'react';
import PropTypes from 'prop-types';

//  The Field set is used to group two or more checkboxes or radio buttons together.
//
//  This component returns a <fieldset> with a legend, which is necessary for screen readers.
//  Many screen readers will read the legend for each control, so it shoud be
//  brief and descriptive.
//
//  As a convenience, passing a name property will give that name to each
//  Checkbox or radio button child so they will all be the same.
//  @returns {node} The rendered DOM node
//  @param {object} props  The props

export default function Fieldset(props) {
  let { name, children, onChange, legend, legendHidden, ...otherProps } = props;
  if (name) {
    children = React.Children.map(children, child =>
      React.cloneElement(child, { name, onChange: onChange })
    );
  }

  const legendType = props.legendHidden ? 'usa-sr-only' : 'usa-legend';

  return (
    <fieldset className='usa-fieldset' {...otherProps}>
      <legend className={legendType}>{legend}</legend>
      {children}
    </fieldset>
  );
}

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  legendHidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func
};

Fieldset.defaultProps = {
  legendHidden: false
};
