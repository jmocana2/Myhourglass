import React from 'react';
import PropTypes from 'prop-types';
import {StyledInput, StyledTextArea} from './styles'

const Input = ({
  multiline,
  cols,
  rows,
  ...rest
}) => {
  const input = (
    <StyledInput {...rest} />
  );

  const textarea = (
    <StyledTextArea cols={cols} rows={rows} {...rest} />
  );
  return multiline ? textarea : input;
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  type: PropTypes.oneOf([
    'button',
    'email',
    'number',
    'password',
    'text',
    'file'
  ]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Input.defaultProps = {
  disabled: false,
  multiline: false,
  required: false,
  type: 'text'
};

export default Input;
