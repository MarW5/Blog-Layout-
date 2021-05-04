import styled from 'styled-components';

export const SubMenuStyle = styled.ul`
  width: 100px;
  display: none;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SubMenuList = styled.li`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.black};
`;
