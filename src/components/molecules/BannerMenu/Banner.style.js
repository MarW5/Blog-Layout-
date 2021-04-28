import styled from 'styled-components';

export const BannerStyle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
