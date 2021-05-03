import React from 'react';
import { BannerStyle, ButtonBox } from './Banner.style';
import { Button } from '../../atoms/Button/Button';

export const Banner = (props) => (
  <BannerStyle>
    <h1 style={{ fontSize: '42px', marginTop: '5%' }}>A modern publishing platform</h1>
    <p>Grow your audience and build yout online brand</p>
    <ButtonBox>
      <Button content={'Start for Free'}></Button>
      <Button content={'Learn More'}></Button>
    </ButtonBox>
  </BannerStyle>
);
