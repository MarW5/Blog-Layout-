import styled from 'styled-components';

export const FooterComponentStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;
