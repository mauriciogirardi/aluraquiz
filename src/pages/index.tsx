import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import db from '../../db.json';
import {
  WidgetContent,
  WidgetHeader,
  Widget,
  WidgetTopic,
} from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import Input from '../components/Input';
import Button from '../components/Button';
import QuizLogo from '../components/QuizLogo';

import { QuizContainer } from '../components/styles/page/home';

const Home: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      router.push(`/quiz?name=${name}`);
    },
    [name, router],
  );

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <WidgetHeader>
            <h1>Javascript</h1>
          </WidgetHeader>
          <WidgetContent>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Coloque seu nome!"
                onChange={e => setName(e.target.value)}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </WidgetContent>
        </Widget>

        <Widget>
          <WidgetContent>
            <h1>Quizes da Galera</h1>
            <p>
              Dá uma olhada nesses quizes incríveis que o pessoal da Imersão
              fez:
            </p>
            <ul>
              {db.external.map(linkQuiz => {
                const [project, user] = linkQuiz
                  .replace('https://', '')
                  .replace('.vercel.app/', '')
                  .split('.');

                return (
                  <li key={linkQuiz}>
                    <WidgetTopic
                      href={linkQuiz}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {`${project} / ${user}`}
                    </WidgetTopic>
                  </li>
                );
              })}
            </ul>
          </WidgetContent>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/mauriciogirardi/aluraquiz" />
    </QuizBackground>
  );
};

export default Home;
