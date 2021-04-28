import React from 'react';
import { MenuNav, StyledList, StyledListElements, StyledListButtons } from './Menu.styles';
import { ReactComponent as StyledLogo } from '../../../assets/images/logo.svg';
import { Button } from '../../atoms/Button/Button';

export const Menu = () => (
  <MenuNav>
    <StyledList>
      <StyledLogo></StyledLogo>
      <StyledListElements>Product</StyledListElements>
      <StyledListElements>Company</StyledListElements>
      <StyledListElements>Connect</StyledListElements>
    </StyledList>
    <StyledListButtons>
      <Button content={'Login'}></Button>
      <Button content={'Sign Up'}></Button>
    </StyledListButtons>
  </MenuNav>
);
