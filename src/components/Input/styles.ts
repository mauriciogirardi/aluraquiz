import styled from 'styled-components';

export const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.theme.colors.primary};
  color: ${({ theme }) => theme.theme.colors.contrastText};
  background-color: ${({ theme }) => theme.theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.theme.borderRadius};
  margin-bottom: 25px;
`;
