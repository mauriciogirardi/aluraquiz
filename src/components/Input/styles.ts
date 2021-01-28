import styled from 'styled-components';

export const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.light.colors.primary};
  color: ${({ theme }) => theme.light.colors.contrastText};
  background-color: ${({ theme }) => theme.light.colors.mainBg};
  border-radius: ${({ theme }) => theme.light.borderRadius};
  margin-bottom: 25px;
`;
