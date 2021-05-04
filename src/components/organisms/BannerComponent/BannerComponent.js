import React from 'react';
import { MenuNav, Wrapper } from './BannerComponent.style';
import { Menu } from 'components/molecules/Menu-nav/Menu';
import { Banner } from 'components/molecules/BannerMenu/Banner';
import { ButtonsNav } from '../../molecules/ButtonsNav/ButtonsNav';
export const BannerComponent = () => (
  <Wrapper>
    <MenuNav>
      <Menu />
      <ButtonsNav />
    </MenuNav>
    <Banner />
  </Wrapper>
);
