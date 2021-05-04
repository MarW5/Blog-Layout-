import styled from 'styled-components';

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
