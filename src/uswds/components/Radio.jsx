import React from 'react';
import PropTypes from 'prop-types';
import Utilities from '../helpers/utilities';

//  * A radio button and a label
//  *
//  * Required props
//  * - label, string -- Text for the label
//  *
//  * Optional props
//  * - id, string -- input's id and label's for attributes
//  * - name, string, defaults to 'radios' -- Sets name attribute
//  * - value, string, defaults to id -- Sets value attribute
//  * - checked, bool -- If true, item is initially set to checked
//  * - disabled, bool --If item, item is disabled

export default class Radio extends React.Component {
  componentWillMount() {
    this.id = this.props.id
      ? this.props.id
      : Utilities.uniqueIdForComponent(this);
  }

  render() {
    const {
      label,
      className,
      disabled,
      id = this.id,
      value,
      ...otherProps
    } = this.props;

    return (
      <div className={`usa-radio ${className}`}>
        <input
          className='usa-radio__input'
          type='radio'
          disabled={disabled}
          aria-disabled={disabled}
          id={id}
          value={value ? value : id}
          {...otherProps}
        />
        <label className='usa-radio__label' htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};

Radio.defaultProps = {
  name: 'radios',
  disabled: false,
  defaultChecked: false
};
