import styled from 'styled-components';
import bgSvg from '../../../assets/images/illustration-laptop-mobile.svg';

export const ToolComponentStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PictureContainer = styled.div`
  width: 50%;
  height: 100vh;
  max-height: 600px;
  position: relative;
`;

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const LaptopPicture = styled.div`
  background-image: url(${bgSvg});
  width: 100%;
  box-sizing: border-box;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  position: absolute;
  padding: 360px;
  right: 199px;
  top: 15px;
`;
