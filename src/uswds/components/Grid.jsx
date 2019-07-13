import React from 'react';
import PropTypes from 'prop-types';

//  Column container aka Grid.
//  You should put columns inside a Grid
//  @param {[bool]} full defaults to false -- if true, removes padding
//  @param {[node]} children Children
//  @returns {[node]} the rendered DOM node

export class Grid extends React.Component {

  static propTypes = {
    full: PropTypes.bool,
    children: PropTypes.node.isRequired,
    gapClass: PropTypes.string
  }
  
  static defaultProps = {
    full: false,
    gapClass: ''
  }

  renderRow() {
    return(
      <div className={`grid-row ${this.props.gapClass}`}>
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
        <div className={this.props.full ? '' : 'grid-container'}>
            {this.renderRow()}
        </div>
    );
  }
}

//  Column that goes in a Grid that makes a grid
//  @param {[string]} width width of the column
//  @param {[node]} children Children
//  @returns {[node]} the rendered DOM node

export function Col({classes, children}) {
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

Col.propTypes = {
  classes: PropTypes.string.isRequired,
  children: PropTypes.node
};
