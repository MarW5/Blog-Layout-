import styled from 'styled-components';

export const MenuNav = styled.div`
  width: 100%;
  padding: 40px 50px;
  display: flex;
  justify-content: space-around;
`;

export const StyledList = styled.ul`
  width: 70%;
  max-width: 1000px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledListElements = styled.li`
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledListButtons = styled.div`
  display: flex;
  width: 30%;
`;
