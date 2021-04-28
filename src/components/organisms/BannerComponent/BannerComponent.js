import React from 'react';
import { users } from 'data/users';
import { StyledList, Wrapper } from './BannerComponent.style';
import { Menu } from 'components/molecules/Menu-nav/Menu';
import { Banner } from 'components/molecules/BannerMenu/Banner';
export const BannerComponent = () => (
  <Wrapper>
    <Menu />
    <Banner />
  </Wrapper>
);
