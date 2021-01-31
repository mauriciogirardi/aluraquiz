import styled from 'styled-components';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }

  form {
    button {
      width: 100%;
      height: 40px;
      border: 0;
      border-radius: 8px;
      margin-top: 12px;
      color: ${({ theme }) => theme.theme.colors.contrastText};
      background-color: ${({ theme }) => theme.theme.colors.primary};
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
