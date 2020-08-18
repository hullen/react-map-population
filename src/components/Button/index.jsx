import React from 'react';
import StyledButton from './styled';

const Button = props => {
  const {
    disabled,
    type,
    onClick,
    label,
    isLoading,
    children,
    ...rest
  } = props;
  return (
    <StyledButton
      type={type || 'default'}
      onClick={onClick}
      disabled={isLoading || disabled}
      {...rest}>
      {isLoading ? '...' : label || children || 'Label'}
    </StyledButton>
  );
};
export default Button;
