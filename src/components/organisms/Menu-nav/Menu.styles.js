import styled from 'styled-components';

export const MenuNav = styled.div`
  background-color: ${({ theme }) => theme.colors.lightRed};
  width: 100%;
  max-width: 1000px;
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  display:flex;
  justify-content: space-between;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display:flex;
`;

export const StyledListElements = styled.li`
  color: ${({ theme }) => theme.colors.white };
`;