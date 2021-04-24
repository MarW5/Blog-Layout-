import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.colors.verylightRed };
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:900;
  color: ${({ theme }) => theme.colors.white };
  text-decoration: none;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;
