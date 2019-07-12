import React from 'react';
import PropTypes from 'prop-types';

/**
 * Provides one of four standard alert types.
 * An alert consists of a box with a light background color,
 * an icon, a headline, and a short explaination.
 *
 * The alert type determines the background color and icon displayed
 *
 * Alert types are 'success', 'warning', 'error', 'info'
 * The type defaults to 'info' if no type is sent via props
 *
 * If the type is 'error' and no role is specified, role defaults to 'alert'
 *
 * @returns {node} the rendered DOM node
 * @param {string} type  Sets the alert type
 * @param {string} title Text for the headline
 * @param {node} body  Text for the description
 * @param {string} role  ARIA role type
 */
export default function Alert ({type, title, body, role}) {
  if ( type === 'error' && !role) {
    role = 'alert';
  }

  return (
    <div className={`usa-alert usa-alert--${type}`} role={role}>
      <div className='usa-alert__body'>
        <h3 className='usa-alert__heading'>{title}</h3>
        <div className='usa-alert__text'>{body}</div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf([
    'info',
    'success',
    'warning', 
    'error'
  ]),
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  role: PropTypes.oneOf([
    'alert',
    'alertdialog'
  ])
};

Alert.defaultProps = {
  type: 'info'
};
