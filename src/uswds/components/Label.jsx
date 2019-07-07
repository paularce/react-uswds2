import React from 'react';
import PropTypes from 'prop-types';

/**
 * The Label component shows a colored pill of text.
 * Comes in two sizes: regular and big. Specify big by passing a 'big' attribute.
 * @returns {node} The rendered DOM node
 * @param {string} size  If 'big', makes the font size larger
 * @param {node} children required. Expected to be the text to display inside the pill
 */
export default class Label extends React.Component {
  
  static propTypes = {
    modifier: PropTypes.oneOf(['required', 'error']),
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <span className={`usa-label${this.props.modifier? ' usa-label--' +  this.props.modifier : ''}`}>{this.props.children}</span>
    );
  }
}
