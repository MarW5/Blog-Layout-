import React from 'react';
import { StyledButton } from './Button.styles';

export const Button = (props) => (
  <StyledButton {...props}>
    {props.content}
  </StyledButton>
);

