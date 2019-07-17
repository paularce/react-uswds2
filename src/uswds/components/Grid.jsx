import React from 'react';
import PropTypes from 'prop-types';

//  Column container aka Grid.
//  You should put columns inside a Grid
//  @param {[bool]} full defaults to false -- if true, removes padding
//  @param {[node]} children Children
//  @returns {[node]} the rendered DOM node

export class Grid extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    full: PropTypes.bool,
    gapClass: PropTypes.string,
    gridClasses: PropTypes.string,
    rowClasses: PropTypes.string
  }
  
  static defaultProps = {
    full: false,
    gapClass: '',
    gridClasses: '',
    rowClasses: ''
  }

  renderRow() {
    return(
      <div className={`grid-row ${this.props.gapClass} ${this.props.gridClasses}`}>
        {this.props.children}
      </div>
    );
  }

  render() {
    const rowContents= this.renderRow();

    if(!this.props.full) {
      return (
        <div className={`grid-container ${this.props.gridClasses}`}>
          {rowContents}
        </div>
      )
    }
    return rowContents;
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
