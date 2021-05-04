import React from 'react';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BannerComponent } from '../components/organisms/BannerComponent/BannerComponent';
import { DesignComponent } from '../components/organisms/DesignComponent/DesignComponent';
import { ArtComponent } from '../components/organisms/ArtComponent/ArtComponent';
import { ToolComponent } from '../components/organisms/ToolsComponent/ToolsComponent';
import { FooterComponent } from '../components/organisms/FooterComponent/Footer';
const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <BannerComponent />
      <DesignComponent />
      <ArtComponent />
      <ToolComponent />
      <FooterComponent />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
