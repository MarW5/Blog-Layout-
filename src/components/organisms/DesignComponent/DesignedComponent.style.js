import styled from 'styled-components';
import bgSvg from '../../../assets/images/illustration-editor-mobile.svg';

export const DesignedComponentStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DesignedTextStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DesignedComponentPictureContainer = styled.div`
  width: 50%;
  height: 600px;
  position: relative;
`;

export const DesignedComponentPicture = styled.div`
  width: 100%;
  height: 600px;
  top: -10%;
  position: absolute;
  background-image: url(${bgSvg});
  box-sizing: border-box;
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
`;
