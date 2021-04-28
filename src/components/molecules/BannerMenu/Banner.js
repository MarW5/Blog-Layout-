import React from 'react';
import { BannerStyle } from './Banner.style';
import { Button } from '../../atoms/Button/Button';

export const Banner = (props) => (
  <BannerStyle>
    <h1>A modern publishing platform</h1>
    <p>Grow your audience and build yout online brand</p>
    <div>Banner</div>
    <Button content={'Start for Free'}></Button>
    <Button content={'Learn More'}></Button>
  </BannerStyle>
);
