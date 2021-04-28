import styled from 'styled-components';
import bgSvg from '../../../assets/images/bg-pattern-intro.svg';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightRed};
  background-image: url(${bgSvg});
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-size: cover;
  background-position: right;
  border-radius: 0 0 0 50px;

  /* &:before{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-size: 100%;
    background: no-repeat;
    
    width: 100vw;
    height: 100vh; */
  /* } */
`;
