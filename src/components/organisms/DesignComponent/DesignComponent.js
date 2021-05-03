import React from 'react';
import { DesignedContent } from '../../molecules/DesignedContent/DesignedContent';
import { DesignedComponentStyle, DesignedTextStyle, DesignedComponentPictureContainer, DesignedComponentPicture } from './DesignedComponent.style';

export const DesignComponent = () => (
  <DesignedComponentStyle>
    <h2 style={{ width: '100%', textAlign: 'center', marginTop: '5%', color: '#1f3f5b', fontSize: '28px' }}>Designed for the future</h2>
    <DesignedTextStyle>
      <DesignedContent />
      <DesignedComponentPictureContainer>
        <DesignedComponentPicture />
      </DesignedComponentPictureContainer>
    </DesignedTextStyle>
  </DesignedComponentStyle>
);
