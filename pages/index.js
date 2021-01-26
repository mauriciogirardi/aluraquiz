import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import { useCallback, useState } from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

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
    input {
      width: 100%;
      height: 35px;
      border-radius: 8px;
      border: 0;
      font-size: 17px;
      padding-left: 8px;
      background-color: ${({ theme }) => theme.colors.mainBg};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.contrastText};
    }

    button {
      width: 100%;
      height: 40px;
      border: 0;
      border-radius: 8px;
      margin-top: 12px;
      color: ${({ theme }) => theme.colors.contrastText};
      background-color: ${({ theme }) => theme.colors.primary};
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    router.push(`/quiz?name=${name}`);
  }, [name]);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Javascript</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Coloque seu nome!"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mauriciogirardi/aluraquiz" />
    </QuizBackground>
  );
}
