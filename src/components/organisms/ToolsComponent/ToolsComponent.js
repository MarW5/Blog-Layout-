import React from 'react';
import { ToolComponentStyle, PictureContainer, TextContainer, LaptopPicture } from './ToolsComponent.style';
import { Headers } from '../../atoms/Headers/Headers';
import { TextContent } from '../../atoms/TextBox/Text';
export const ToolComponent = () => (
  <ToolComponentStyle>
    <PictureContainer>
      <LaptopPicture />
    </PictureContainer>
    <TextContainer>
      <Headers content={'Free, open, simple'} />
      <TextContent
        content={
          'Blogr is a free and open source application backed by large community of helpful developers. It supports features such as code syntax highlighting RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
        }
      />
      <Headers content={'Powerful tooling'} />
      <TextContent
        content={
          'Batteries included. We build a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.'
        }
      />
    </TextContainer>
  </ToolComponentStyle>
);
