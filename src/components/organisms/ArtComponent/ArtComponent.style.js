import styled from 'styled-components';
import bgSvg from '../../../assets/images/bg-pattern-circles.svg';
import phonesSvg from '../../../assets/images/illustration-phones.svg';

export const ArtStyleComponent = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  background-image: url(${bgSvg});
  /* height: 40vh; */
  box-sizing: border-box;
  background-size: inherit;
  background-position: left;
  border-radius: 0 100px 0 100px;
  background-repeat: no-repeat;
  background-position-y: center;
  position: relative;
`;

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const PictureContainer = styled.div`
  width: 50%;
  position: relative;
`;

export const PicturePhones = styled.div`
  width: 100%;
  background-image: url(${phonesSvg});
  background-repeat: no-repeat;
  position: absolute;
  height: 100%;
  top: -60px;
  left: 154px;
`;
