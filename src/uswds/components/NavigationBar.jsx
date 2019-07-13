import React from 'react';
import PropTypes from 'prop-types';

//  * Provides a standard Navigation Bar.

export default class NavigationBar extends React.Component {
  render() {
    return (
      <nav role='navigation' className='usa-nav'>
        <div className='usa-nav-inner'>
          <button className='usa-nav-close'>
            <img src='/assets/images/close.svg' alt='close' />
          </button>
          {this.props.children}
        </div>
      </nav>
    );
  }
}

NavigationBar.LAYOUT_BASIC = 'usa-search--big';
NavigationBar.LAYOUT_EXTENDED = 'usa-search--medium';

NavigationBar.propTypes = {
  layout: PropTypes.oneOf([
    NavigationBar.LAYOUT_BASIC,
    NavigationBar.LAYOUT_EXTENDED
  ]),
  children: PropTypes.node
};

NavigationBar.defaultProps = {
  layout: NavigationBar.LAYOUT_BASIC
};
