import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledButton, StyledLink } from './styles'

const Button = ({children, className, disabled, href}) => {
  return (
    href ?
    <StyledLink href={href} title={children} className={className}>{children}</StyledLink>
    :
    <StyledButton disabled={disabled} className={className}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
};

export default Button;