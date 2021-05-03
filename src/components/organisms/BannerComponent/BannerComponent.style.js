import styled from 'styled-components';
import bgSvg from '../../../assets/images/bg-pattern-intro.svg';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightRed};
  background-image: url(${bgSvg});
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-size: cover;
  background-position: left;
  border-radius: 0 0 0 50px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
