import React from 'react';
import { ArtStyleComponent, TextContainer, PictureContainer, PicturePhones } from './ArtComponent.style';
import { Headers } from '../../atoms/Headers/Headers';
import { TextContent } from '../../atoms/TextBox/Text';
export const ArtComponent = () => (
  <ArtStyleComponent>
    <PictureContainer>
      <PicturePhones />
    </PictureContainer>
    <TextContainer>
      <Headers style={{ color: 'white' }} content={'State of the Art Infrastructure'} />
      <TextContent
        style={{ color: 'white', maxWidth: '600px' }}
        content={
          'With reliability and speed in mind, worldwide data conters provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your renders are, keeping your side competitive.'
        }
      />
    </TextContainer>
  </ArtStyleComponent>
);
