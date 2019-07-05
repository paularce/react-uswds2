import React from 'react';
import PropTypes from 'prop-types';

/**
 * A tag draws attention to new or categorized content elements.
 *
 * Required props:
 * - children: node, usually text to display within the tag
 *
 * Optional props:
 * - classes: string, additional classes
 */

export default class Tag extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.string
  };

  static defaultProps = {
    classes: ''
  };

  render() {
    return (
      <span class={`usa-tag ${this.props.classes}`}>
        {this.props.children}
      </span>
    );
  }
}