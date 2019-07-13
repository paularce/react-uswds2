import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from './InputLabel';
import Utilities from '../helpers/utilities';

//  Class representing a label and a input of type='text'
// 
//  Required props:
//  - label: Sets the text for the input's label
// 
//  Optional props:
//  - id: sets the id attribute for the input and the <label for... attribute
//  - type: string, defaults to 'text'. Sets the input type
//  - value: string. If present pre-populates the input with the given string.
//  - required: bool, defaults to false. Adds required label, required attribute and aria-required='true'
//  - validators: array of Validator objects. If present, field get error state onBlur if the value does not match the given test
//  - enableSpellCheck: true or false, defaults to false. If true, enables browser autocorrection while typing
//  - errorMessage: string. If present triggers the error state and displays the error message
//  - isValid: bool. If true, sets isValid state - i.e. green border
//  - allowedChars: Validator object. If present, user can only type characters that match the given test

export default class TextInput extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelHint: PropTypes.string,
    type: PropTypes.oneOf([
      'text',
      'email',
      'password',
      'search',
      'url',
      'date',
      'month',
      'tel',
      'week',
      'number'
    ]),
    classes: PropTypes.string,
    required: PropTypes.bool,
    enableSpellCheck: PropTypes.bool,
    errorMessage: PropTypes.string,
    isValid: PropTypes.bool,
    value: PropTypes.string,
    validators: PropTypes.array,
    allowedChars: PropTypes.object
  };

  static defaultProps = {
    classes: '',
    type: 'text',
    enableSpellCheck: false,
    required: false
  };

  
  //  constructor
  //  @param {object} props The props that will be applied to this component.
  //  Set initial state
  //  Value: value of the input.
  //  isPristine: tracks if user has typed in the input
  //  isValid: tracks if the field is valid based on passed validators
  //  hasError: tracks if the field has an error
  //  errorMessage: displayed message when the field hasError
  

  constructor(props) {
    super(props);

    let pristine = true;
    if (this.props.value || this.props.errorMessage) {
      pristine = false;
    }

    this.state = {
      value: this.props.value || '',
      isPristine: pristine,
      isValid: this.props.isValid ? true : false,
      hasError: this.props.errorMessage ? true : false,
      errorMessage: this.props.errorMessage
    };
  }

  
//  check to see if an Id was passed in, if not generate one.
   
  componentWillMount() {
    this.id = this.props.id
      ? this.props.id
      : Utilities.uniqueIdForComponent(this);
  }


  // If errorMessage is updated after initial render, adjust the state accordingly
  
  componentWillReceiveProps({ errorMessage }) {
    if (errorMessage) {
      this.setState({
        isPristine: false,
        isValid: false,
        hasError: true,
        errorMessageBody: errorMessage
      });
    }
  }

  render() {
    let error = null;
    if (this.state.hasError) {
      error = (
        <span className='usa-error-message' role='alert'>
          {this.state.errorMessage}
        </span>
      );
    }

    return (
      <React.Fragment>
        <InputLabel
          label={this.props.label}
          labelHint={this.props.labelHint}
          htmlFor={this.id}
          hasError={this.state.hasError}
          required={this.props.required} />
        {error}
        <input
          id={this.id}
          name={this.props.id}
          type={this.props.type}
          value={this.state.value}
          className={`usa-input ${this.props.classes} ${this.state.isValid ? 'usa-input--success' : null}`}
          required={this.props.required}
          aria-required={this.props.required}
          aria-labelledby={`${this.props.id}-label`}
          onBlur={this._handleBlur.bind(this)}
          onChange={this._handleChange.bind(this)}
          spellCheck={this.props.enableSpellCheck ? true : false} />
      </React.Fragment>
    );
  }

  _validate() {
    let validators = this.props.validators;
    // Check if field empty
    if (!this.state.value) {
      // If it's required, say so
      if (this.props.required) {
        this.setState({
          hasError: true,
          isValid: false,
          errorMessage: 'This field is required'
        });
      } else {
        // is empty so reset isValid and hasError
        this.setState({
          isValid: false,
          hasError: false,
          errorMessage: null
        });
      }
    }
    // If validator(s) were sent as a prop, test them next
    else if (validators) {
      for (let validator of validators) {
        // check is validator is forced 'no validation'
        if (!validator.pattern) {
          break;
        }
        // if validator doesn't pass it own test, set error and abort loop
        if (!validator.isValid(this.state.value)) {
          this.setState({
            hasError: true,
            isValid: false,
            errorMessage: validator.message
          });
          break;
          // else assume it's valid
        } else {
          this.setState({
            hasError: false,
            isValid: true
          });
        }
      }
    }
    // must be required field with a value, so no error
    else {
      this.setState({
        hasError: false,
        errorMessage: null
      });
    }
  }

  //  onBlur event on input
  _handleBlur() {
    if (
      (this.props.required || this.props.validators) &&
      !this.state.isPristine
    ) {
      this._validate();
    }
  }

  
  //  his function runs every time the user changes the contents of the input.
  //  @param {event} event The event
  _handleChange(event) {
    // Check if allowedChars validator exists. If it does, check the last char
    // entered against the validator. If validation fails, return thereby preventing
    // the value from being added to the state.
    if (this.props.allowedChars) {
      let input = event.target.value.slice(-1);
      if (!this.props.allowedChars.isValid(input)) {
        return;
      }
    }
    // Commit the input's value to state.value.
    this.setState({ value: event.target.value }, () => {
      // React docs suggest this callback should generally go in ComponentDidUpdate,
      // however since both this callback actions update the state, they must
      // go here because changing state in ComponentDidUpdate would cause a
      // recursive loop and blow up the call stack
      if (this.state.value && this.state.isPristine) {
        this.setState({ isPristine: false });
      }
      // if
      if (this.state.hasError || this.state.isValid) {
        this._validate();
      }
    });
  }
}
