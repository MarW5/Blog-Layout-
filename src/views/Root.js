import React from 'react';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BannerComponent } from '../components/organisms/BannerComponent/BannerComponent';
import { DesignComponent } from 'components/organisms/DesignComponent/DesignComponent';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <BannerComponent />
      <DesignComponent />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
