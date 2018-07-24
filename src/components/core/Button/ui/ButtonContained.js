import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledButton } from './styles'

const ButtonContained = ({disabled, href, color, children}) => {
  return (
    <StyledButton disabled={disabled} href={href} color={color}>{children}</StyledButton>
  );
};

ButtonContained.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['darkPrimary', 'primary', 'lightPrimary', 'light', 'dark', 'accent']),
  disabled: PropTypes.bool,
  href: PropTypes.string,
};

ButtonContained.defaultProps = {
  color: 'light',
  disabled: false,
  href: undefined,
};

export default ButtonContained;