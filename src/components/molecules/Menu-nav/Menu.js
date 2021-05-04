import React from 'react';
import { StyledList, StyledListElements, StyledListButtons, StyletUserButtons } from './Menu.styles';
import { ReactComponent as StyledLogo } from '../../../assets/images/logo.svg';

export const Menu = () => (
  <StyledList>
    <StyledLogo></StyledLogo>
    <StyledListElements>Product</StyledListElements>
    <StyledListElements>Company</StyledListElements>
    <StyledListElements>Connect</StyledListElements>
  </StyledList>
);
