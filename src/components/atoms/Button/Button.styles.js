import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 170px;
  height: 45px;
  margin: 0 5px;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.verylightRed};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.lightRed};
    background-color: ${({ theme }) => theme.colors.white};
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
