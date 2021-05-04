import { SubMenu } from 'components/atoms/SubMenu/SubMenu';
import styled from 'styled-components';

export const StyledList = styled.ul`
  width: 35%;
  max-width: 1000px;
  list-style: none;
  margin: 0;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledListElements = styled.li`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    font-weight: 900;
  }

  &:hover ${SubMenu} {
    display: flex;
  }
`;

export const StyledListButtons = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyletUserButtons = styled.a`
  padding: 10px 40px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    padding: 10px 40px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.verylightRed};
    color: ${({ theme }) => theme.colors.white};
  }
`;
