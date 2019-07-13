import React from 'react';
import PropTypes from 'prop-types';

//  A form group wraps a related set of form elements
// 
//  Required props:
//  - children: node, usually text to display within the tag
// 
//  Optional props:
//  - classes: string, additional classes

export default class FormGroup extends React.Component {
  
  static propTypes = {
    children: PropTypes.node.isRequired,
    hasError: PropTypes.bool
  };

  static defaultProps = {
    hasError: false
  };

  render() {
    return (
      <div className={`usa-form-group ${this.props.hasError ? 'usa-form-group--error' : ''}`}>
        {this.props.children}
      </div>
    );
  }
}