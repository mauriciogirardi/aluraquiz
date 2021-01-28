import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.light.colors.secondary};
  color: ${({ theme }) => theme.light.colors.contrastText};
  border-radius: ${({ theme }) => theme.light.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;
