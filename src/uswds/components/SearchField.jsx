import React from "react";
import PropTypes from 'prop-types';

/**
 * Provides a standard Search Field.
 *
 * The search field can be one of three sizes by setting the `size` prop. The 
 * valid values for the `size` prop are as follows:
 *
 *   - SearchField.SIZE_BIG
 *   - SearchField.SIZE_MEDIUM (default)
 *   - SearchField.SIZE_SMALL
 *
 * For more information on when to use each of the different sizes, please 
 * consult the US Web Design Standards (https://standards.usa.gov/search-bar/).
 */
export default class SearchField extends React.Component
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */

  static propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.oneOf([ '','big','small' ])
  };
  
  static defaultProps = {
    size: ''
  };

  render()
  {
    let buttonContents;
    if (this.props.size === 'small') {
      buttonContents = (<span className="usa-sr-only">Search</span>);
    }
    else {
      buttonContents = (<span className="usa-search__submit-text">Search</span>);
    }
    
    return (
      <form className={`usa-search ${this.props.size? 'usa-search--' + this.props.size : ''}`}>
        <div role="search">
          <label className="usa-sr-only" htmlFor={this.props.id}>Search</label>
          <input 
            type="search"
            className="usa-input"
            name={this.props.id}
            id={this.props.id} />
          <button className="usa-button" type="submit">
            {buttonContents}
          </button>
        </div>
      </form>
    );
  }
}

