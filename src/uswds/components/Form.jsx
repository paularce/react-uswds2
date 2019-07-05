import React from "react";
import PropTypes from "prop-types";

/**
 * The Form is used to create an HTML form for user input.
 *
 */
export default class Form extends React.Component {
  
  static propTypes = {
    action: PropTypes.string,
    children: PropTypes.node.isRequired,
    classes: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {
    action: '',
    classes: '',
    id: ''
  };

  render() {
    return (
      <form id={this.props.id} name={this.props.id} className={`usa-form ${this.props.classes}`} action={this.props.action}>
        {this.props.children}
      </form>
    );
  }
}
